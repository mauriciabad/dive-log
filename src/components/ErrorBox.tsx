import classNames from "classnames"
import React from "react"
import type { FC } from "react"
import { TbAlertOctagon } from "react-icons/tb"

interface Props {
  className?: string
  title?: string
  message?: string
}


const ErrorBox: FC<Props> = ({ className, message, title = 'There was an error' }) => {
  return (
    <div className={classNames(className, "border-red-400 border-2 bg-red-100 text-red-500 text-sm rounded-md")}>
      <p className="text-md font-bold m-4">
        <TbAlertOctagon className="inline-block h-5 w-5 align-bottom" /> {title}
      </p>
      {message && <pre className="text-sm overflow-x-auto pb-4 px-4">{message}</pre>}
    </div>
  )
}

export default ErrorBox

