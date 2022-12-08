import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import classNames from "classnames"

const InputWrapper =
  <K extends keyof Inputs, Inputs extends FieldValues>({
    children,
    displayLabel,
    registerOptions,
    Icon,
    error,
  }: PropsWithChildren<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any,
    displayLabel: string,
    registerOptions: RegisterOptions<Inputs>,
    Icon?: IconType
    error?: FieldErrors<Inputs>[K]
  }>) => (<>
    <label className="block w-full max-w-md mx-auto">
      <div className="flex items-center text-gray-800 text-sm">
        {Icon && <Icon className="h-4 w-4 mr-0.5" />}
        <span className="" >{displayLabel}{
          registerOptions?.required && <span className="text-red-400 ml-1">*</span>
        }{error &&
          <span className="text-red-500 ml-2"><>{error?.message}</></span>
          }</span>

      </div>
      {React.cloneElement(children, {
        classNameError: classNames({
          'border-red-500 border-2 m-[-2px]': error,
        })
      })}

    </label>
  </>)

export default InputWrapper
