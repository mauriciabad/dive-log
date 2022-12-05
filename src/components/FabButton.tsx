import classNames from "classnames"
import Link from "next/link"
import React from "react"
import { FC } from "react"
import { TbPlus } from 'react-icons/tb'

interface Props {
  className?: string
  href?: string
  onClick?: () => void
}

const FabButton: FC<Props> = ({ className, href, onClick }) => {
  return (<>
    {href ?
      <Link
        className={classNames(className, "inline-flex items-center justify-center p-0 w-16 h-16 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none")}
        href={href}
        onClick={onClick}>
        <TbPlus className="w-8 h-8 inline-block text-white" />
      </Link>
      :
      <button
        className={classNames(className, "inline-flex items-center justify-center p-0 w-16 h-16 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none")}
      >
        <TbPlus className="w-6 h-6 inline-block text-white" />
      </button>
    }</>)
}

export default FabButton
