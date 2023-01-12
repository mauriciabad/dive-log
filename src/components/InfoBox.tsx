import classNames from 'classnames'
import React from 'react'
import type { FC } from 'react'
import { TbInfoCircle } from 'react-icons/tb'

interface Props {
  className?: string
  message?: string
  action?: () => JSX.Element | JSX.Element[]
}

const InfoBox: FC<Props> = ({ className, message, action }) => {
  return (
    <div
      className={classNames(
        className,
        'rounded-md border-2 border-blue-200 bg-blue-50 text-blue-400'
      )}
    >
      <div className="text-md m-2 flex items-start justify-between sm:m-4">
        <TbInfoCircle className="mt-0.5 mr-2 inline-block h-5 w-5 shrink-0 sm:mr-4" />
        <p className="grow">{message}</p>
        <div className="shrink-0">{action?.()}</div>
      </div>
    </div>
  )
}

export default InfoBox
