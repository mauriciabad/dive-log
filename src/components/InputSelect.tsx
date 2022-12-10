import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'
import Selector from "./Selector";
import { TbLoader } from "react-icons/tb";

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>> = {
  data?: Data[]
  exposedProperty: keyof Data
  displayValue: (value: Data | null) => string
} &
  Omit<InputWrapperProps<TFieldValues, TName>, 'render'>

const InputSelect =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>>({
    label,
    Icon,
    internalLabel,
    data,
    displayValue,
    required,
    control,
    error,
    exposedProperty
  }: Props<TFieldValues, TName, Data>) => (
    <InputWrapper
      control={control}
      label={label}
      Icon={Icon}
      internalLabel={internalLabel}
      required={required}
      error={error}
      render={({ classNameError, controllerProps }) => (
        <>
          {data
            ? <Selector
              data={data}
              classNameError={classNameError}
              displayValue={displayValue}
              exposedProperty={exposedProperty}
              {...controllerProps}
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
      )}
    />
  )

export const makeCustomInputSelect = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends Record<string, unknown>>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TName, Data>['control']
}) => {
  return (props: Omit<Props<TFieldValues, TName, Data>, 'control'>) => {
    return InputSelect({
      control: rebundantProps.control,
      error: rebundantProps.errors[props.internalLabel],
      ...props
    })
  }
}

export default InputSelect
