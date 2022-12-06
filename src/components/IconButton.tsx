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
}


const IconButton: FC<Props> = ({ className, classNameIcon, href, onClick, text, Icon, disabled }) => {
  const classWrapper = classNames(className, "bg-blue-500 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-600 inline-flex items-center disabled:bg-gray-500")
  const classIcon = classNames(classNameIcon, 'w-6 h-6 inline-block text-white mr-2 shrink-0')

  const click = () => {
    if (disabled) return
    return onClick?.()
  }
  return (<>
    {href ?
      disabled ? <span
        className={classWrapper}
      >
        {Icon && <Icon className={classIcon} />}
        <span>{text}</span>
      </span>
        :
        <Link
          className={classWrapper}
          href={href}
          onClick={click}
        >
          {Icon && <Icon className={classIcon} />}
          <span>{text}</span>
        </Link>
      :
      <button
        className={classWrapper}
        onClick={click}
        disabled={disabled}
      >
        {Icon && <Icon className={classIcon} />}
        <span>{text}</span>
      </button>
    }</>)
}

export default IconButton
