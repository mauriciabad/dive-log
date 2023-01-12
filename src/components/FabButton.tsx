import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'
import { TbPlus } from 'react-icons/tb'

interface Props {
  className?: string
  href?: string
  onClick?: () => void
}

const FabButton: FC<Props> = ({ className, href, onClick }) => {
  const classWrapper = classNames(
    className,
    'group inline-flex items-center justify-center p-0 w-16 h-16 bg-blue-600 rounded-full hover:bg-blue-700 mouse shadow-xl shadow-blue-600/30 focus-visible:outline-2 focus-visible:outline-offset-2'
  )
  const classIcon = classNames(
    'w-8 h-8 inline-block text-white transition-transform ease-out group-hover:rotate-90 group-focus-visible:rotate-90 duration-200'
  )

  return (
    <>
      {href ? (
        <Link className={classWrapper} href={href} onClick={onClick}>
          <TbPlus className={classIcon} />
        </Link>
      ) : (
        <button className={classWrapper} onClick={onClick}>
          <TbPlus className={classIcon} />
        </button>
      )}
    </>
  )
}

export default FabButton
