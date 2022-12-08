import classNames from "classnames"
import Link from "next/link"
import React from "react"
import type { FC } from "react"
import type { IconType } from "react-icons"

interface Props {
  text: string
  className?: string
  classNameIcon?: string
  href?: string
  onClick?: () => void
  Icon?: IconType
  disabled?: boolean
  loading?: boolean
}


const IconButton: FC<Props> = ({ className, classNameIcon, href, onClick, text, Icon, disabled, loading }) => {
  const classWrapper = classNames(className, "bg-blue-500 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-600 inline-flex items-center")
  const classIcon = classNames(classNameIcon, 'w-6 h-6 inline-block text-white mr-2 shrink-0')


  return (<>
    {
      disabled || loading ? <span
        className={classNames(classWrapper, 'bg-gray-500')}
      >
        {Icon && <Icon className={classNames(classIcon, { 'animate-pulse': loading })} />}
        <span>{text}</span>
      </span>
        : href ?
          <Link
            className={classWrapper}
            href={href}
            onClick={onClick}
          >
            {Icon && <Icon className={classIcon} />}
            <span>{text}</span>
          </Link>
          :
          <button
            className={classWrapper}
            onClick={onClick}
          >
            {Icon && <Icon className={classIcon} />}
            <span>{text}</span>
          </button>
    }</>)
}

export default IconButton
