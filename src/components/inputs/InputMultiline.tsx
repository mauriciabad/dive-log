import type { InputHTMLAttributes } from "react";
import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import classNames from "classnames"
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'
import { getInputAttributesFromZod } from '../../validators/helpers'
import type { ZodRawShape } from "zod";

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape> = {
  inputProps?: InputHTMLAttributes<HTMLTextAreaElement>,
  theme?: 'filled' | 'outline'
  className?: string
  rows?: number
} &
  Omit<InputWrapperProps<TFieldValues, TName, TZodSchema>, 'render'>

const InputSimple =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape>({
    label,
    Icon,
    inputProps,
    control,
    internalLabel,
    error,
    schema,
    note,
    theme = 'filled',
    className,
    rows = 5
  }: Props<TFieldValues, TName, TZodSchema>) => {
    const inputPropsFromZod = getInputAttributesFromZod(schema, internalLabel)

    return (
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
          const { onChange, value, ...controllerFieldProps } = controllerProps.field

          return (
            <textarea
              className={classNames(classNameError, "resize-y block bg-white rounded-md w-full min-w-0 mt-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500", {
                "shadow": theme === 'filled',
                "border-gray-300 shadow-sm": theme === 'outline',
              })}
              rows={rows}
              required={inputPropsFromZod.required}
              maxLength={inputPropsFromZod.maxLength}
              minLength={inputPropsFromZod.minLength}
              {...inputProps}
              onChange={({ target: { value } }) => onChange(value)}
              value={value}
              {...controllerFieldProps}
            />
          )
        }}
      />
    )
  }

export const makeCustomInputMultiline = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TName, TZodSchema>['control']
  schema: Props<TFieldValues, TName, TZodSchema>['schema']
  theme: Props<TFieldValues, TName, TZodSchema>['theme']
}) => {
  return (props: Omit<Props<TFieldValues, TName, TZodSchema>, keyof typeof rebundantProps>) => {
    return InputSimple({
      control: rebundantProps.control,
      schema: rebundantProps.schema,
      theme: rebundantProps.theme,
      error: rebundantProps.errors[props.internalLabel],

      ...props
    })
  }
}

export default InputSimple
