import type { InputHTMLAttributes, PropsWithChildren } from "react";
import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import classNames from "classnames"
import InputWrapper from './InputWrapper'
import Selector from "./Selector";

const InputSelect =
  <K extends keyof Inputs, Inputs extends FieldValues, Data extends {
    id: string
  }, R>({
    displayLabel,
    registerOptions,
    Icon,
    error,
    internalLabel,
    register,
    data,
    displayValue,
    classNameError,
    returnValue,
  }: PropsWithChildren<{
    displayLabel: string,
    registerOptions: RegisterOptions<Inputs>,
    Icon?: IconType
    error?: FieldErrors<Inputs>[K]
    internalLabel: K,
    register: UseFormRegister<Inputs>
    data?: Data[]
    displayValue: (value: Data) => string
    classNameError?: string
    returnValue: (value: Data) => R
  }>) => (
    <InputWrapper
      error={error}
      displayLabel={displayLabel}
      registerOptions={registerOptions}
      Icon={Icon}
    >
      {data
        ? <Selector
          data={data}
          displayValue={displayValue}
          classNameError={classNameError}
          returnValue={returnValue}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...register(internalLabel as any, registerOptions)}
        />
        : <div className="block bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1 cursor-progress">
          <span className="animate-pulse">Loading...</span>
        </div>
      }
    </InputWrapper>
  )

export default InputSelect
