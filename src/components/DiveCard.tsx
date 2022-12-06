import type { Dive } from "@prisma/client"
import classNames from "classnames"
import React from "react"
import type { FC } from "react"
import { TbTemperature, TbArrowBarToDown, TbCalendarTime, TbHourglass } from 'react-icons/tb'
import ReactTimeAgo from 'react-time-ago'
import type { IconType } from "react-icons"

interface Props {
  className?: string
  dive: Dive
}

const DiveCard: FC<Props> = ({ className, dive }) => {
  return (
    <div
      className={classNames(className, 'items-center max-w-[30rem] mx-auto w-full bg-white shadow rounded-md p-6')}
    >
      <Label className="-mt-3" text="Name" />
      <h3 className="text-lg mt-0">{dive.name}</h3>

      <div className="border-t-2 border-gray-100 my-2" />
      <div className="flex mt-2">

        <div className="grow space-y-2">
          {/* <div className="flex items-start"><Icon Icon={TbMapPin} /><span className="text-base">{dive.diveSiteId}</span></div> */}
          <div className="flex items-start"><Icon Icon={TbHourglass} /><span className="text-base">{dive.duration} minutes</span></div>
          <div className="flex items-start"><Icon Icon={TbCalendarTime} /><span className="text-base"><ReactTimeAgo date={dive.startDateTime} locale="en-US" /></span></div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Label text="Dive nº" />
          <span className="block text-4xl font-bold">{dive.diveNumber}</span>

          <div className="flex gap-2">
            <div className="flex items-start"><Icon Icon={TbArrowBarToDown} /><span className="text-base">-{dive.maximumDepth.toString()}</span> m</div>
            <div className="flex items-start"><Icon Icon={TbTemperature} /><span className="text-base">{dive.waterAverageTemperature?.toString()}</span> ºC</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DiveCard

const Label: FC<{ text: string, className?: string }> =
  ({ text, className }) => <span className={classNames(className, 'block text-sm text-gray-400')}>{text}</span>

const Icon: FC<{ Icon: IconType, className?: string }> =
  ({ className, Icon }) => <Icon className={classNames(className, 'inline h-5 w-5 flex-shrink-0 text-gray-500 my-0.5 mr-1 box-content')} />
