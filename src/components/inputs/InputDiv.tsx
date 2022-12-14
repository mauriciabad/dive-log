import classNames from "classnames"
import React from "react"
import type { FC, ReactNode } from "react"
import type { IconType } from "react-icons/lib"

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
  return (<>
    <div className="flex items-center text-gray-800 text-sm">
      {Icon && <Icon className="h-4 w-4 mr-0.5" />}
      <span className="" >{label}{
        note && <span className="text-xs text-gray-600 whitespace-nowrap"> ({note})</span>
      }{
          required && <span className="text-red-400 ml-1">*</span>
        }{errorMessage &&
          <span className="text-red-500 ml-2"><>{errorMessage}</></span>
        }</span>
    </div>
    <div className={classNames(className, "border-2 border-gray-200 rounded-md overflow-hidden")}>
      {children}
    </div>
  </>)
}

export default InputDiv

