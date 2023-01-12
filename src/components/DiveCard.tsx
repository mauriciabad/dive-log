import type { Dive, DiveSite } from '@prisma/client'
import classNames from 'classnames'
import React from 'react'
import type { FC } from 'react'
import {
  TbTemperature,
  TbArrowBarToDown,
  TbCalendarTime,
  TbHourglass,
  TbMapPin,
} from 'react-icons/tb'
import ReactTimeAgo from 'react-time-ago'
import type { IconType } from 'react-icons'
import Link from 'next/link'
import { durationToString } from '../utils/time'

interface Props {
  className?: string
  dive: Dive & {
    diveSite: DiveSite
  }
}

const DiveCard: FC<Props> = ({ className, dive }) => {
  const diveDurationFormatted = durationToString(dive.duration)

  return (
    <Link
      href={`/user/dives/${dive.id}`}
      className={classNames(
        className,
        'mx-auto w-full max-w-[30rem] items-center rounded-md bg-white p-6 shadow'
      )}
    >
      <Label className="-mt-3" text="Name" />
      <h3 className="mt-0 text-lg">{dive.name}</h3>

      <div className="my-2 border-t-2 border-gray-100" />
      <div className="mt-2 flex">
        <div className="grow space-y-2">
          <div className="flex items-start">
            <Icon Icon={TbMapPin} />
            <span className="text-base">{dive.diveSite.name}</span>
          </div>
          <div className="flex items-start">
            <Icon Icon={TbHourglass} />
            <span className="text-base">{diveDurationFormatted}</span>
          </div>
          <div className="flex items-start">
            <Icon Icon={TbCalendarTime} />
            <span className="text-base">
              <ReactTimeAgo date={dive.startDateTime} locale="en-US" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Label text="Dive nº" />
          <span className="block text-4xl font-bold">{dive.diveNumber}</span>

          <div className="flex gap-2">
            <div className="flex items-start">
              <Icon Icon={TbArrowBarToDown} />
              <span className="text-base">
                -{dive.maximumDepth.toString()}
              </span>{' '}
              m
            </div>
            <div className="flex items-start">
              <Icon Icon={TbTemperature} />
              <span className="text-base">
                {dive.waterAverageTemperature?.toString()}
              </span>{' '}
              ºC
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DiveCard

const Label: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <span className={classNames(className, 'block text-sm text-gray-400')}>
    {text}
  </span>
)

const Icon: FC<{ Icon: IconType; className?: string }> = ({
  className,
  Icon,
}) => (
  <Icon
    className={classNames(
      className,
      'my-0.5 mr-1 box-content inline h-5 w-5 flex-shrink-0 text-gray-500'
    )}
  />
)
