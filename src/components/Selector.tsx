import React from 'react'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { TbChevronDown, TbCheck } from 'react-icons/tb'
import classNames from 'classnames';
import type { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

type Props<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, T extends Record<string, unknown>> = {
  classNameError?: string
  data: T[]
  displayValue: (value: T | null) => string
  exposedProperty: keyof T
  theme?: 'filled' | 'outline'
} & Partial<ControllerRenderProps<TFieldValues, TName>>

const Selector = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, T extends Record<string, unknown>>({
  data,
  displayValue,
  classNameError,
  onChange,
  onBlur,
  name,
  ref,
  value,
  exposedProperty,
  theme = 'filled'
}: Props<TFieldValues, TName, T>) => {
  const [selected, setSelected] = useState<T | null>(
    data.find(d => d[exposedProperty] === value) ?? null
  )
  const [query, setQuery] = useState<string>('')

  const filteredData =
    query.trim() === ''
      ? data
      : data.filter((value) =>
        displayValue(value)
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <Combobox
      value={selected}
      onChange={(event: T | null) => {
        setSelected(event)
        onChange?.(event?.[exposedProperty])
      }}
      // by={exposedProperty}
      name={name}
      nullable={true}
    >
      <div className="relative mt-1 block w-full max-w-md mx-auto">
        <div className={classNames(classNameError, "relative w-full cursor-default text-left")}>
          <Combobox.Input
            className={classNames(classNameError, "pr-10 block bg-white rounded-md w-full min-w-0 mt-1 text-gray-900 focus:border-blue-500 focus:ring-blue-500", {
              "border-none shadow": theme === 'filled',
              "border-gray-300 shadow-sm": theme === 'outline',
            })}
            displayValue={displayValue}
            onChange={(event) => setQuery(event.target.value)}
            ref={ref}
            type="search"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <TbChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => {
            setQuery('')
            onBlur?.()
          }}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg z-[1]">
            {filteredData.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-500">
                Empty
              </div>
            ) : (
              filteredData.map((value) => (
                <Combobox.Option
                  key={String(value[exposedProperty])}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                    }`
                  }
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {displayValue(value)}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-500'
                            }`}
                        >
                          <TbCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default Selector
