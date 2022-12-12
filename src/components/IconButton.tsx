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
  onlyIcon?: boolean
}


const IconButton: FC<Props> = ({
  className,
  classNameIcon,
  href,
  onClick,
  text,
  Icon,
  disabled,
  loading,
  onlyIcon
}) => {
  const classWrapper = classNames(className, {
    'bg-blue-500 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-600 focus-visible:ring-offset-2': !onlyIcon,
    'text-current p-2 rounded-full border-gray-300 border hover:bg-gray-50 shadow-sm justify-center aspect-square': onlyIcon,
  }, 'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none overflow-hidden inline-flex items-center')
  const classIcon = classNames(classNameIcon, {
    'inline-block mr-2 shrink-0': !onlyIcon,
    '': onlyIcon,
  }, 'w-6 h-6')
  const classText = classNames({
    '': !onlyIcon,
    'sr-only': onlyIcon
  })

  return (<>
    {
      disabled || loading ? <span
        className={classNames(classWrapper, {
          'bg-gray-500': !onlyIcon,
          'opacity-70': onlyIcon,
        }, 'cursor-not-allowed')}
      >
        {Icon && <Icon className={classNames(classIcon, { 'animate-pulse': loading })} />}
        <span className={classText}>{text}</span>
      </span>
        : href ?
          <Link
            className={classWrapper}
            href={href}
            onClick={onClick}
          >
            {Icon && <Icon className={classIcon} />}
            <span className={classText}>{text}</span>
          </Link>
          :
          <button
            className={classWrapper}
            onClick={onClick}
          >
            {Icon && <Icon className={classIcon} />}
            <span className={classText}>{text}</span>
          </button>
    }</>)
}

export default IconButton
