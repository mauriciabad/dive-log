import type { InputHTMLAttributes, PropsWithChildren } from "react";
import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import classNames from "classnames"
import InputWrapper from './InputWrapper'

const CustomInput =
  <K extends keyof Inputs, Inputs extends FieldValues>({
    displayLabel,
    internalLabel,
    registerOptions,
    inputProps,
    Icon,
    error,
    register,
    classNameError,
  }: PropsWithChildren<{
    displayLabel: string,
    internalLabel: K,
    registerOptions: RegisterOptions<Inputs>,
    inputProps: InputHTMLAttributes<HTMLInputElement>,
    Icon?: IconType
    error?: FieldErrors<Inputs>[K]
    register: UseFormRegister<Inputs>
    classNameError?: string

  }>) => (
    <InputWrapper
      error={error}
      displayLabel={displayLabel}
      registerOptions={registerOptions}
      Icon={Icon}
    >
      <input
        className={classNames(classNameError, "block bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1 text-gray-900")}
        {...inputProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...register(internalLabel as any, registerOptions)}
      />
    </InputWrapper>
  )

export default CustomInput
