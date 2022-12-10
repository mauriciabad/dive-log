import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldPath, FieldValues, ControllerProps, Control, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form'
import classNames from "classnames"

export interface InputWrapperProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
  label: string,
  Icon?: IconType
  render: (props: {
    classNameError: string
    controllerProps: Parameters<ControllerProps<TFieldValues, TName>['render']>[number]
  }) => JSX.Element,
  control: Control<TFieldValues>,
  internalLabel: TName,
  error?: FieldErrors<TFieldValues>[TName]
  // TODO: find a way to not have to pass it 
  required?: boolean,
}

const InputWrapper =
  <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
    label,
    Icon,
    render,
    required,
    control,
    internalLabel,
    error
  }: InputWrapperProps<TFieldValues, TName>) => {
    return (
      <label className="block w-full max-w-md mx-auto" >
        <div className="flex items-center text-gray-800 text-sm">
          {Icon && <Icon className="h-4 w-4 mr-0.5" />}
          <span className="" >{label}{
            required && <span className="text-red-400 ml-1">*</span>
          }{error &&
            <span className="text-red-500 ml-2"><>{error?.message}</></span>
            }</span>
        </div>

        <Controller
          control={control}
          name={internalLabel}
          render={(controllerProps) => render({
            controllerProps,
            classNameError: classNames({
              'border-red-500 border-2 m-[-2px]': error,
            }),
          })} />

      </label >
    )
  }

export default InputWrapper
