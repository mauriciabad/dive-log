import classNames from "classnames"
import React from "react"
import type { FC, ReactNode } from "react"
import type { IconType } from "react-icons/lib"

interface Props {
  className?: string
  Icon?: IconType
  children: ReactNode | ReactNode[]
  label: string
}


const InputGroup: FC<Props> = ({
  className,
  Icon,
  children,
  label,
}) => {
  return (<>
    <div className="flex items-center text-gray-800 text-sm mb-1">
      {Icon && <Icon className="h-4 w-4 mr-0.5" />}
      <span className="" >{label}</span>
    </div>
    <div className={classNames(className, "border-2 border-gray-200 rounded-md overflow-hidden")}>
      {children}
    </div>
  </>)
}

export default InputGroup

