import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'
import Selector from "./Selector";
import { TbLoader } from "react-icons/tb";

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends {
  id: string
}, R> = {
  required?: boolean,
  data?: Data[]
  displayValue: (value: Data | null) => string
  returnValue: (value: Data | null) => R
} &
  Omit<InputWrapperProps<TFieldValues, TName>, 'render'>

const InputSelect =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends {
    id: string
  }, R>({
    label,
    Icon,
    internalLabel,
    data,
    displayValue,
    returnValue,
    required,
    control
  }: Props<TFieldValues, TName, Data, R>) => (
    <InputWrapper
      control={control}
      label={label}
      Icon={Icon}
      internalLabel={internalLabel}
      required={required}
      render={({ classNameError, controllerProps }) => (
        <>
          {data
            ? <Selector
              data={data}
              displayValue={displayValue}
              classNameError={classNameError}
              returnValue={returnValue}
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

export const makeCustomInputSelect = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, Data extends {
  id: string
}, R>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TName, Data, R>['control']
}) => {
  return (props: Omit<Props<TFieldValues, TName, Data, R>, 'control'>) => {
    return InputSelect({
      control: rebundantProps.control,
      error: rebundantProps.errors[props.internalLabel],
      ...props
    })
  }
}

export default InputSelect
