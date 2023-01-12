import React from 'react'
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import type { InputWrapperProps } from './InputWrapper'
import InputWrapper from './InputWrapper'
import Selector from './uncontrolled/Selector'
import { TbLoader } from 'react-icons/tb'
import type { ZodRawShape } from 'zod'
import classNames from 'classnames'

type Props<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  Data extends Record<string, unknown>,
  TZodSchema extends ZodRawShape
> = {
  data?: Data[]
  exposedProperty: keyof Data
  displayValue: (value: Data | null) => string
  theme?: 'filled' | 'outline'
  className?: string
} & Omit<InputWrapperProps<TFieldValues, TName, TZodSchema>, 'render'>

const InputSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  Data extends Record<string, unknown>,
  TZodSchema extends ZodRawShape
>({
  label,
  Icon,
  internalLabel,
  data,
  displayValue,
  control,
  error,
  exposedProperty,
  schema,
  note,
  theme = 'filled',
  className,
}: Props<TFieldValues, TName, Data, TZodSchema>) => (
  <InputWrapper
    control={control}
    label={label}
    Icon={Icon}
    internalLabel={internalLabel}
    error={error}
    schema={schema}
    note={note}
    className={className}
    render={({ classNameError, controllerProps }) => {
      return (
        <>
          {data ? (
            <Selector
              data={data}
              classNameError={classNameError}
              displayValue={displayValue}
              exposedProperty={exposedProperty}
              theme={theme}
              {...controllerProps.field}
            />
          ) : (
            <div
              className={classNames(
                classNameError,
                'relative mt-1 block w-full min-w-0 cursor-progress rounded-md bg-white py-2 px-4 text-gray-900',
                {
                  shadow: theme === 'filled',
                  'border border-gray-300 shadow-sm': theme === 'outline',
                }
              )}
            >
              <span className="animate-pulse text-gray-400">Loading...</span>
              <div className=" absolute inset-y-2 right-0 flex items-center pr-2">
                <TbLoader className="h-5 w-5 animate-spin text-gray-400" />
              </div>
            </div>
          )}
        </>
      )
    }}
  />
)

export const makeCustomInputSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  Data extends Record<string, unknown>,
  TZodSchema extends ZodRawShape
>(rebundantProps: {
  errors: FieldErrors<TFieldValues>
  control: Props<TFieldValues, TName, Data, TZodSchema>['control']
  schema: Props<TFieldValues, TName, Data, TZodSchema>['schema']
  theme: Props<TFieldValues, TName, Data, TZodSchema>['theme']
}) => {
  return (
    props: Omit<
      Props<TFieldValues, TName, Data, TZodSchema>,
      keyof typeof rebundantProps
    >
  ) => {
    return InputSelect({
      control: rebundantProps.control,
      schema: rebundantProps.schema,
      theme: rebundantProps.theme,
      error: rebundantProps.errors[props.internalLabel],

      ...props,
    })
  }
}

export default InputSelect
