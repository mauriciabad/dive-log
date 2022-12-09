import type { PropsWithChildren } from "react";
import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldErrors, FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import classNames from "classnames"
import InputWrapper from './InputWrapper'

const customTypeToInputType = {
  number: 'number',
  text: 'text',
  datetime: 'datetime-local',
} as const

const CustomInput =
  <K extends FieldPath<Inputs>, Inputs extends FieldValues>({
    displayLabel,
    internalLabel,
    registerOptions,
    Icon,
    error,
    register,
    classNameError,
    type,
  }: PropsWithChildren<{
    displayLabel: string,
    internalLabel: K,
    registerOptions: RegisterOptions<Inputs>,
    Icon?: IconType
    error?: FieldErrors<Inputs>[K]
    register: UseFormRegister<Inputs>
    classNameError?: string
    type: keyof typeof customTypeToInputType
  }>) => (
    <InputWrapper
      error={error}
      displayLabel={displayLabel}
      registerOptions={registerOptions}
      Icon={Icon}
    >
      <input
        className={classNames(classNameError, "block bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1 text-gray-900")}
        type={customTypeToInputType[type]}
        {...register(internalLabel, {
          setValueAs: (value: unknown) => {
            switch (type) {
              case 'number': return value !== '' ? Number(value) : undefined
              case 'datetime': return value !== '' ? value : undefined
              case 'text': return value !== '' ? typeof value === 'string' ? value.trim() : value : undefined
            }
          }, ...registerOptions
        })}
      />
    </InputWrapper>
  )

export default CustomInput
