import classNames from "classnames"
import React from "react"
import type { FC } from "react"
import { TbInfoCircle } from "react-icons/tb"

interface Props {
  className?: string
  message?: string
  action?: () => JSX.Element | JSX.Element[]
}


const InfoBox: FC<Props> = ({ className, message, action }) => {
  return (
    <div className={classNames(className, "border-blue-200 border-2 bg-blue-50 text-blue-400 rounded-md")}>
      <div className="text-md m-2 sm:m-4 flex justify-between items-start">
        <TbInfoCircle className="inline-block h-5 w-5 mt-0.5 mr-2 sm:mr-4 shrink-0" />
        <p className="grow">{message}</p>
        <div className="shrink-0">{action?.()}</div>
      </div>
    </div>
  )
}

export default InfoBox

