import type { InputHTMLAttributes } from "react";
import React from "react"
import type { FieldErrors, FieldPath, FieldValues } from 'react-hook-form'
import classNames from "classnames"
import type { InputWrapperProps } from './InputWrapper';
import InputWrapper from './InputWrapper'
import { getInputAttributesFromZod } from '../validators/helpers'
import type { ZodRawShape } from "zod";

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape> = {
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
  theme?: 'filled' | 'outline'
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
    theme = 'filled'
  }: Props<TFieldValues, TName, TZodSchema>) => {
    const itemSchema = schema.shape[internalLabel]
    const inputPropsFromZod = itemSchema ? getInputAttributesFromZod(itemSchema) : {}
    if (!itemSchema) console.warn(`Input ${internalLabel} doesn't exist in the zod validation schema root level`);

    return (
      <InputWrapper
        control={control}
        label={label}
        Icon={Icon}
        internalLabel={internalLabel}
        error={error}
        schema={schema}
        note={note}
        render={({ classNameError, controllerProps }) => {
          const { onChange, value, ...controllerFieldProps } = controllerProps.field

          return (
            <input
              className={classNames(classNameError, "block bg-white rounded-md w-full min-w-0 mt-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500", {
                "shadow": theme === 'filled',
                "border-gray-300 shadow-sm": theme === 'outline',
              })}
              {...inputPropsFromZod}
              {...inputProps}
              onChange={({ target: { value } }) => onChange(parseOutput(value, inputProps?.type || inputPropsFromZod?.type || 'text'))}
              value={parseInput(value, inputProps?.type || inputPropsFromZod?.type || 'text')}
              {...controllerFieldProps}
            />
          )
        }}
      />
    )
  }

export const makeCustomInputSimple = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape>(rebundantProps: {
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

function parseOutput(value: string, type: InputHTMLAttributes<HTMLInputElement>['type']): string | number | Date | null {
  if (value === '' || value === null || value === undefined) return null

  switch (type) {
    case 'datetime-local': return new Date(value)
    case 'number': return Number(value)
    case 'text': default: return value
  }
}

function parseInput(value: string | number | Date, type: InputHTMLAttributes<HTMLInputElement>['type']): string {
  if (value === '' || value === null || value === undefined) return ''

  switch (type) {
    case 'datetime-local': {
      if (!(value instanceof Date)) {
        console.warn(`Input with type datetime-local recieved a value that's not a date. Setting it to "".`, value);
        return ''
      }
      return value.toISOString().slice(0, 16)
    }
    case 'number': case 'text': default: return String(value)
  }
}

export default InputSimple
