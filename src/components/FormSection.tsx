import classNames from 'classnames'
import React from 'react'
import type { FC, ReactNode } from 'react'

interface Props {
  className?: string
  title: string
  description?: string
  children?: ReactNode | ReactNode[]
  separator?: boolean
}

const FormSection: FC<Props> = ({
  className,
  title,
  description,
  children,
  separator = true,
}) => {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            )}
          </div>
        </div>
        <div className="-mx-4 mt-5 sm:-mx-6 md:col-span-2 md:mx-0 md:mt-0">
          <div className="space-y-6 bg-white px-4 py-5  shadow sm:rounded-md sm:p-6">
            <div
              className={classNames(
                className,
                'grid grid-cols-12 items-end gap-4'
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
      {separator && (
        <div className="mt-10 md:mt-0" aria-hidden="true">
          <div className="hidden py-5 md:block">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormSection
