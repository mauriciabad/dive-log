import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'
import Selector from "./Selector";
import { TbLoader } from "react-icons/tb";
import type { ZodRawShape } from "zod";

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>, TZodSchema extends ZodRawShape> = {
  data?: Data[]
  exposedProperty: keyof Data
  displayValue: (value: Data | null) => string
} &
  Omit<InputWrapperProps<TFieldValues, TName, TZodSchema>, 'render'>

const InputSelect =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>, TZodSchema extends ZodRawShape>({
    label,
    Icon,
    internalLabel,
    data,
    displayValue,
    control,
    error,
    exposedProperty,
    schema,
    note
  }: Props<TFieldValues, TName, Data, TZodSchema>) => (
    <InputWrapper
      control={control}
      label={label}
      Icon={Icon}
      internalLabel={internalLabel}
      error={error}
      schema={schema}
      note={note}
      render={({ classNameError, controllerProps }) => {
        return (
          <>
            {data
              ? <Selector
                data={data}
                classNameError={classNameError}
                displayValue={displayValue}
                exposedProperty={exposedProperty}
                {...controllerProps.field}
              />
              : <div className="block relative bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1 cursor-progress">
                <span className="animate-pulse text-gray-400">Loading...</span>
                <div className=" absolute inset-y-2 right-0 pr-2 flex items-center">
                  <TbLoader
                    className="h-5 w-5 text-gray-400 animate-spin"
                  />
                </div>
              </div>
            }
          </>
        )
      }}
    />
  )

export const makeCustomInputSelect = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>, TZodSchema extends ZodRawShape>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TName, Data, TZodSchema>['control']
  schema: Props<TFieldValues, TName, Data, TZodSchema>['schema']
}) => {
  return (props: Omit<Props<TFieldValues, TName, Data, TZodSchema>, keyof typeof rebundantProps>) => {
    return InputSelect({
      control: rebundantProps.control,
      schema: rebundantProps.schema,
      error: rebundantProps.errors[props.internalLabel],

      ...props
    })
  }
}

export default InputSelect
