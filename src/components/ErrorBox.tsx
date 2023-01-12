import classNames from 'classnames'
import React from 'react'
import type { FC } from 'react'
import { TbAlertOctagon } from 'react-icons/tb'

interface Props {
  className?: string
  title?: string
  message?: string
}

const ErrorBox: FC<Props> = ({
  className,
  message,
  title = 'There was an error',
}) => {
  return (
    <div
      className={classNames(
        className,
        'rounded-md border-2 border-red-400 bg-red-100 text-sm text-red-500'
      )}
    >
      <p className="text-md m-4 font-bold">
        <TbAlertOctagon className="inline-block h-5 w-5 align-bottom" /> {title}
      </p>
      {message && (
        <pre className="overflow-x-auto px-4 pb-4 text-sm">{message}</pre>
      )}
    </div>
  )
}

export default ErrorBox
