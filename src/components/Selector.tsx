import type { PropsWithChildren } from 'react';
import React from 'react'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { TbChevronDown, TbCheck } from 'react-icons/tb'
import classNames from 'classnames';
import type { ChangeHandler, RefCallBack } from 'react-hook-form';

interface Props<T extends {
  id: string
}, R, K extends string> {
  classNameError?: string
  data: T[]
  displayValue: (value: T) => string
  returnValue: (value: T) => R
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: K;
}

const Selector = <T extends { id: string }, R, K extends string>({
  data,
  displayValue,
  classNameError,
  onChange,
  onBlur,
  ref,
  name
}: PropsWithChildren<Props<T, R, K>>) => {
  const [selected, setSelected] = useState<T | null>(null)
  const [query, setQuery] = useState('')

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
    <Combobox value={selected} onChange={(event => {
      setSelected(event)
      onChange({
        target: { value: event ? displayValue(event) : null }, type: 'text'
      })
    })} >
      <div className="relative mt-1 block w-full max-w-md mx-auto">
        <div className={classNames(classNameError, "relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow focus-within:outline-2")}>
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-gray-900"
            displayValue={(value: null | T) => !value ? '' : displayValue(value)}
            onChange={(event) => setQuery(event.target.value)}
            onBlur={onBlur}
            ref={ref}
            name={name}
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
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg">
            {filteredData.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredData.map((value) => (
                <Combobox.Option
                  key={value.id}
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
