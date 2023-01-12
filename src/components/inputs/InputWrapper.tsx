import React from 'react'
import type { IconType } from 'react-icons/lib'
import type {
  FieldPath,
  FieldValues,
  ControllerProps,
  Control,
  FieldErrors,
} from 'react-hook-form'
import { Controller } from 'react-hook-form'
import classNames from 'classnames'
import type { ZodObject, ZodRawShape } from 'zod'
import { getInputAttributesFromZod } from '../../validators/helpers'

export interface InputWrapperProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TZodSchema extends ZodRawShape
> {
  label: string
  Icon?: IconType
  render: (props: {
    classNameError: string
    controllerProps: Parameters<
      ControllerProps<TFieldValues, TName>['render']
    >[number]
  }) => JSX.Element
  control: Control<TFieldValues>
  internalLabel: TName
  error?: FieldErrors<TFieldValues>[TName]
  schema: ZodObject<TZodSchema, 'strict'>
  note?: string
  className?: string
}

const InputWrapper = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TZodSchema extends ZodRawShape
>({
  label,
  Icon,
  render,
  control,
  internalLabel,
  error,
  schema,
  note,
  className,
}: InputWrapperProps<TFieldValues, TName, TZodSchema>) => {
  const { required } = getInputAttributesFromZod(schema, internalLabel)

  return (
    <label className={classNames(className, 'block w-full')}>
      <div className="flex items-center text-sm text-gray-800">
        {Icon && <Icon className="mr-0.5 h-4 w-4" />}
        <span className="">
          {label}
          {note && (
            <span className="whitespace-nowrap text-xs text-gray-600">
              {' '}
              ({note})
            </span>
          )}
          {required && <span className="ml-1 text-red-400">*</span>}
          {error && (
            <span className="ml-2 text-red-500">
              <>{error?.message}</>
            </span>
          )}
        </span>
      </div>

      <Controller
        control={control}
        name={internalLabel}
        render={(controllerProps) =>
          render({
            controllerProps,
            classNameError: classNames({
              'border-red-500 border-2 m-[-2px]': error,
            }),
          })
        }
      />
    </label>
  )
}

export default InputWrapper
