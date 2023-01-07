import type { CustomNextPage } from "../../../_app";
import { useRouter } from "next/router";
import {
  TbTemperature,
  TbBattery1,
  TbBattery4,
  TbStar,
  TbTag,
  TbRipple,
  TbAward,
  TbCloud,
  TbDroplet,
  TbFall,
  TbFlag,
  TbHaze,
  TbSalt,
  TbBatteryCharging,
  TbCalendarTime,
  TbHash,
  TbArrowBarToDown,
  TbFold,
  TbHourglass,
  TbMapPin,
  TbWind,
  TbTemperatureMinus,
  TbTemperaturePlus,
  TbEye,
  TbBattery,
  TbBarbell,
  TbHome,
  TbHeartHandshake,
  TbLicense
} from 'react-icons/tb'
import { trpc } from "../../../../utils/trpc";
import ErrorBox from "../../../../components/ErrorBox";
import { getParameter } from "../../../../utils/router";
import type { IconType } from "react-icons";
import type { FC } from "react";
import { durationToString } from "../../../../utils/time";
import { enumLabels } from "../../../../parametrized-data/enumLabels";
import classNames from "classnames";
import WaveAnimation from "../../../../components/WaveAnimation";

const ViewDivePage: CustomNextPage = () => {
  const router = useRouter()
  const id = getParameter(router, 'id')
  if (!id) return <ErrorBox message="Invalid dive id, check that the url is correct." />

  const { data: dive, error } = trpc.dive.getDive.useQuery({ id })

  return (<>
    {error ?
      <ErrorBox message={error?.message} />
      :
      dive ?
        <div className="grid grid-cols-12 gap-4 p-4 sm:p-0">
          <Item
            Icon={TbCalendarTime}
            title="Creation date"
            value={dive.createdAt.toLocaleString('en-GB')}
          />
          <Item
            Icon={TbCalendarTime}
            title="Update date"
            value={dive.updatedAt.toLocaleString('en-GB')}
          />
          <Item
            Icon={TbTag}
            title="Name"
            value={dive.name}
          />
          <Item
            Icon={TbHash}
            title="Dive number"
            value={dive.diveNumber.toString()}
          />
          <Item
            Icon={TbCalendarTime}
            title="Start date"
            value={dive.startDateTime.toLocaleString('en-GB')}
          />
          <Item
            Icon={TbHourglass}
            title="Duration"
            value={durationToString(dive.duration)}
          />
          <Item
            Icon={TbFlag}
            title="Dive type"
            value={dive.type !== null && enumLabels.DiveType[dive.type]}
          />
          <Item
            Icon={TbAward}
            title="Specialty dive type"
            value={dive.specialtyDiveType !== null && enumLabels.SpecialtyDiveType[dive.specialtyDiveType]}
          />
          <Item
            Icon={TbMapPin}
            title="Divesite"
            value={dive.diveSite.name}
          />
          <Item
            Icon={TbArrowBarToDown}
            title="Maximum depth"
            value={dive.maximumDepth !== null && `${dive.maximumDepth.toFixed(1)} m`}
          />
          <Item
            Icon={TbFold}
            title="Average depth"
            value={dive.averageDepth !== null && `${dive.averageDepth.toFixed(1)} m`}
          />
          <Item
            Icon={TbTemperatureMinus}
            title="Water minimum temperature"
            value={dive.waterMinimumTemperature !== null && `${dive.waterMinimumTemperature.toFixed(0)} ºC`}
          />
          <Item
            Icon={TbTemperature}
            title="Water average temperature"
            value={dive.waterAverageTemperature !== null && `${dive.waterAverageTemperature.toFixed(0)} ºC`}
          />
          <Item
            Icon={TbTemperaturePlus}
            title="Water maximum temperature"
            value={dive.waterMaximumTemperature !== null && `${dive.waterMaximumTemperature.toFixed(0)} ºC`}
          />
          <Item
            Icon={TbDroplet}
            title="Water body"
            value={dive.waterBody !== null && enumLabels.WaterBody[dive.waterBody]}
          />
          <Item
            Icon={TbSalt}
            title="Water type"
            value={dive.waterType !== null && enumLabels.WaterType[dive.waterType]}
          />
          <Item
            Icon={TbFall}
            title="Water entry"
            value={dive.waterEntry !== null && enumLabels.WaterEntry[dive.waterEntry]}
          />
          <Item
            Icon={TbEye}
            title="Water visibility"
            value={dive.waterVisibility !== null && enumLabels.WaterVisibility[dive.waterVisibility]}
          />
          <Item
            Icon={TbRipple}
            title="Water current"
            value={dive.waterCurrent !== null && enumLabels.WaterCurrent[dive.waterCurrent]}
          />
          <Item
            Icon={TbHaze}
            title="Water surface"
            value={dive.waterSurface !== null && enumLabels.WaterSurface[dive.waterSurface]}
          />
          <Item
            Icon={TbCloud}
            title="Weather"
            value={dive.weather !== null && enumLabels.Weather[dive.weather]}
          />
          <Item
            Icon={TbWind}
            title="Air temperature"
            value={dive.airTemperature !== null && `${dive.airTemperature.toFixed(1)} ºC`}
          />
          <Item
            Icon={TbBarbell}
            title="Weight"
            value={dive.weight !== null && `${dive.weight.toFixed(0)} kg`}
          />
          <Item
            Icon={TbBattery4}
            title="Start cylinder presure"
            value={dive.startCylinderPresure !== null && `${dive.startCylinderPresure.toFixed(0)} bar`}
          />
          <Item
            Icon={TbBattery1}
            title="End cylinder presure"
            value={dive.endCylinderPresure !== null && `${dive.endCylinderPresure.toFixed(0)} bar`}
          />
          <Item
            Icon={TbBattery}
            title="Cylinder material"
            value={dive.cylinderMaterial !== null && enumLabels.CylinderMaterial[dive.cylinderMaterial]}
          />
          <Item
            Icon={TbBatteryCharging}
            title="Cylinder volume"
            value={dive.cylinderVolume !== null && `${dive.cylinderVolume.toFixed(0)} l`}
          />
          <Item
            Icon={TbHome}
            title="Dive center"
            value={dive.diveCenter?.name}
          />
          <Item
            Icon={TbHeartHandshake}
            title="Role as dive buddy"
            value={dive.roleasDiveBuddy !== null && enumLabels.DiveBuddyInDiveRole[dive.roleasDiveBuddy]}
          />
          <Item
            Icon={TbStar}
            title="Rating"
            value={dive.rating !== null && `${dive.rating.toString()} / 10`}
          />
          <Item
            Icon={TbLicense}
            title="Experience notes"
            value={dive.experienceNotes}
          />
          <Item
            Icon={TbLicense}
            title="Technical notes"
            value={dive.technicalNotes}
          />
          {/* TODO: Missing links */}
        </div>
        :
        <div className="flex flex-col items-center justify-center h-96 overflow-hidden">
          <WaveAnimation className="max-w-[125vw]" />
          <p className="text-2xl">Loading...</p>
        </div>
    }
  </>);
};

ViewDivePage.title = 'View dive'

export default ViewDivePage;

const Item: FC<{
  Icon: IconType,
  title: string
  value?: string | null | false
  className?: string
}> = ({ Icon, title, value, className }) => {
  return (
    <div className={classNames(className, 'col-span-12 sm:col-span-6 lg:col-span-4')}>
      <Icon className="inline-block mr-2" />
      <span className="">{title}</span>
      <span>: </span>
      {value === undefined || value === null || value === false ?
        <span className="italic text-gray-600">unset</span>
        :
        <span className="">{value}</span>
      }
    </div>
  )
}
