import type { PropsWithChildren } from "react";
import React from "react"
import type { IconType } from "react-icons/lib"
import type { FieldErrors, FieldPath, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import InputWrapper from './InputWrapper'
import Selector from "./Selector";
import { TbLoader } from "react-icons/tb";

const InputSelect =
  <K extends FieldPath<Inputs>, Inputs extends FieldValues, Data extends {
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
    displayValue: (value: Data | null) => string
    classNameError?: string
    returnValue: (value: Data | null) => R
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
          internalLabel={internalLabel}
          register={register}
          registerOptions={registerOptions}
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
    </InputWrapper>
  )

export default InputSelect
