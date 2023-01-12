import classNames from 'classnames'
import React from 'react'
import type { FC, ReactNode } from 'react'
import type { IconType } from 'react-icons/lib'

interface Props {
  className?: string
  Icon?: IconType
  children: ReactNode | ReactNode[]
  label: string
  note?: string
  errorMessage?: string
  required?: boolean
}

const InputDiv: FC<Props> = ({
  className,
  Icon,
  children,
  label,
  note,
  errorMessage,
  required,
}) => {
  return (
    <>
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
          {errorMessage && (
            <span className="ml-2 text-red-500">
              <>{errorMessage}</>
            </span>
          )}
        </span>
      </div>
      <div
        className={classNames(
          className,
          'overflow-hidden rounded-md border-2 border-gray-200'
        )}
      >
        {children}
      </div>
    </>
  )
}

export default InputDiv
