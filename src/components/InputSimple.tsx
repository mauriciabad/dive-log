import type { InputHTMLAttributes } from "react";
import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import classNames from "classnames"
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  inputProps: InputHTMLAttributes<HTMLInputElement>,
} &
  Omit<InputWrapperProps<TFieldValues, TName>, 'render'>

const InputSimple =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
    label,
    Icon,
    inputProps,
    control,
    internalLabel,
    error
  }: Props<TFieldValues, TName>) => (
    <InputWrapper
      control={control}
      label={label}
      Icon={Icon}
      internalLabel={internalLabel}
      required={inputProps.required}
      error={error}
      render={({ classNameError, controllerProps }) => (
        <input
          className={classNames(classNameError, "block bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1 text-gray-900")}
          {...inputProps}
          {...controllerProps.field}
        />
      )}
    />
  )

export const makeCustomInputSimple = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TName>['control']
}) => {
  return (props: Omit<Props<TFieldValues, TName>, 'control'>) => {
    return InputSimple({
      control: rebundantProps.control,
      error: rebundantProps.errors[props.internalLabel],
      ...props
    })
  }
}

export default InputSimple
