import type { CustomNextPage } from "../../../../hooks/useWrapInLayout";
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
  TbLicense,
  TbTrash,
  TbPencil
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
import FormSection from "../../../../components/FormSection";
import IconButton from "../../../../components/IconButton";

const ViewDivePage: CustomNextPage = () => {
  const router = useRouter()
  const id = getParameter(router, 'id')
  if (!id) return <ErrorBox message="Invalid dive id, check that the url is correct." />

  const { data: dive, error } = trpc.dive.getDive.useQuery({ id })

  const deleteDiveMutation = trpc.dive.deleteDive.useMutation()
  const deleteDive = async (): Promise<void> => {
    await deleteDiveMutation.mutateAsync({ id })
    router.push("/user/dives");
  }

  return (<>
    {error ?
      <ErrorBox message={error?.message} />
      :
      dive ?
        <div>
          <FormSection
            title="Basic"
            description="The minimum information you need to keep."
          >
            <Item
              Icon={TbCalendarTime}
              title="Creation date"
              value={dive.createdAt.toLocaleString('en-GB')}
              className="col-span-6"
            />
            <Item
              Icon={TbCalendarTime}
              title="Update date"
              value={dive.updatedAt.toLocaleString('en-GB')}
              className="col-span-6"
            />
            <Item
              Icon={TbTag}
              title="Name"
              value={dive.name}
              className="col-span-6"
            />
            <Item
              Icon={TbHash}
              title="Dive number"
              value={dive.diveNumber.toString()}
              className="col-span-6"
            />
            <Item
              Icon={TbCalendarTime}
              title="Start date"
              value={dive.startDateTime.toLocaleString('en-GB')}
              className="col-span-6"
            />
            <Item
              Icon={TbHourglass}
              title="Duration"
              value={durationToString(dive.duration)}
              className="col-span-6"
            />
            <Item
              Icon={TbFlag}
              title="Dive type"
              value={dive.type !== null && enumLabels.DiveType[dive.type]}
              className="col-span-6"
            />
            <Item
              Icon={TbAward}
              title="Specialty dive type"
              value={dive.specialtyDiveType !== null && enumLabels.SpecialtyDiveType[dive.specialtyDiveType]}
              className="col-span-6"
            />
            <Item
              Icon={TbArrowBarToDown}
              title="Maximum depth"
              value={dive.maximumDepth !== null && `${dive.maximumDepth.toFixed(1)} m`}
              className="col-span-6"
            />
            <Item
              Icon={TbFold}
              title="Average depth"
              value={dive.averageDepth !== null && `${dive.averageDepth.toFixed(1)} m`}
              className="col-span-6"
            />
            <Item
              Icon={TbMapPin}
              title="Divesite"
              value={dive.diveSite.name}
              className="col-span-6"
            />
          </FormSection>

          <FormSection
            title="Environment"
            description="Information about the conditions you dived in."
          >
            <Item
              Icon={TbTemperatureMinus}
              title="Water minimum temperature"
              value={dive.waterMinimumTemperature !== null && `${dive.waterMinimumTemperature.toFixed(0)} ºC`}
              className="col-span-6"
            />
            <Item
              Icon={TbTemperature}
              title="Water average temperature"
              value={dive.waterAverageTemperature !== null && `${dive.waterAverageTemperature.toFixed(0)} ºC`}
              className="col-span-6"
            />
            <Item
              Icon={TbTemperaturePlus}
              title="Water maximum temperature"
              value={dive.waterMaximumTemperature !== null && `${dive.waterMaximumTemperature.toFixed(0)} ºC`}
              className="col-span-6"
            />
            <Item
              Icon={TbDroplet}
              title="Water body"
              value={dive.waterBody !== null && enumLabels.WaterBody[dive.waterBody]}
              className="col-span-6"
            />
            <Item
              Icon={TbSalt}
              title="Water type"
              value={dive.waterType !== null && enumLabels.WaterType[dive.waterType]}
              className="col-span-6"
            />
            <Item
              Icon={TbFall}
              title="Water entry"
              value={dive.waterEntry !== null && enumLabels.WaterEntry[dive.waterEntry]}
              className="col-span-6"
            />
            <Item
              Icon={TbEye}
              title="Water visibility"
              value={dive.waterVisibility !== null && enumLabels.WaterVisibility[dive.waterVisibility]}
              className="col-span-6"
            />
            <Item
              Icon={TbRipple}
              title="Water current"
              value={dive.waterCurrent !== null && enumLabels.WaterCurrent[dive.waterCurrent]}
              className="col-span-6"
            />
            <Item
              Icon={TbHaze}
              title="Water surface"
              value={dive.waterSurface !== null && enumLabels.WaterSurface[dive.waterSurface]}
              className="col-span-6"
            />
            <Item
              Icon={TbCloud}
              title="Weather"
              value={dive.weather !== null && enumLabels.Weather[dive.weather]}
              className="col-span-6"
            />
            <Item
              Icon={TbWind}
              title="Air temperature"
              value={dive.airTemperature !== null && `${dive.airTemperature.toFixed(1)} ºC`}
              className="col-span-6"
            />
          </FormSection>

          <FormSection
            title="Equipment"
            description="Information related to the equipment you used."
          >
            <Item
              Icon={TbBarbell}
              title="Weight"
              value={dive.weight !== null && `${dive.weight.toFixed(0)} kg`}
              className="col-span-6"
            />
            <Item
              Icon={TbBatteryCharging}
              title="Cylinder volume"
              value={dive.cylinderVolume !== null && `${dive.cylinderVolume.toFixed(0)} l`}
              className="col-span-6"
            />
            <Item
              Icon={TbBattery4}
              title="Start cylinder presure"
              value={dive.startCylinderPresure !== null && `${dive.startCylinderPresure.toFixed(0)} bar`}
              className="col-span-6"
            />
            <Item
              Icon={TbBattery1}
              title="End cylinder presure"
              value={dive.endCylinderPresure !== null && `${dive.endCylinderPresure.toFixed(0)} bar`}
              className="col-span-6"
            />
            <Item
              Icon={TbBattery}
              title="Cylinder material"
              value={dive.cylinderMaterial !== null && enumLabels.CylinderMaterial[dive.cylinderMaterial]}
              className="col-span-6"
            />
          </FormSection>

          <FormSection
            title="People"
            description="Information about other divers and dive centers."
          >
            <Item
              Icon={TbHome}
              title="Dive center"
              value={dive.diveCenter?.name}
              className="col-span-6"
            />
            <Item
              Icon={TbHeartHandshake}
              title="Role as dive buddy"
              value={dive.roleasDiveBuddy !== null && enumLabels.DiveBuddyInDiveRole[dive.roleasDiveBuddy]}
              className="col-span-6"
            />
          </FormSection>

          <FormSection
            title="Organisms"
            description="Creatures you saw that you consider relevant."
          >
            <div className="py-6 text-xl text-center text-gray-300 col-span-12">In development...</div>
            {/* Missing fields */}
            {/* Lining to other db entities */}
            {/* organisms */}
          </FormSection>

          <FormSection
            title="Personal"
            description="So you don't forget what happened during the dive."
            separator={false}
          >
            <Item
              Icon={TbStar}
              title="Rating"
              value={dive.rating !== null && `${dive.rating.toString()} / 10`}
              className="col-span-12"
            />
            <Item
              Icon={TbLicense}
              title="Experience notes"
              value={dive.experienceNotes}
              className="col-span-12 sm:col-span-6"
            />
            <Item
              Icon={TbLicense}
              title="Technical notes"
              value={dive.technicalNotes}
              className="col-span-12 sm:col-span-6"
            />
            {/* TODO: Missing links */}
          </FormSection>

          <div className="flex justify-center gap-4">
            <IconButton
              text="Edit"
              Icon={TbPencil}
              href={`/user/dives/${dive.id}/edit`}
              className="flex mt-8 px-8"
            />
            <IconButton
              text="Delete"
              dangerous
              Icon={TbTrash}
              onClick={deleteDive}
              loading={deleteDiveMutation.isLoading}
              className="flex mt-8 px-8"
            />
          </div>

          {deleteDiveMutation.error && <ErrorBox message={deleteDiveMutation.error?.message} />}
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
    <div className={classNames(className, '')}>
      <Icon className="inline-block text-sm h-4 w-4 mr-1" />
      <span className="text-sm">{title}</span>
      {value === undefined || value === null || value === false ?
        <span className="block italic text-gray-600">Not specified</span>
        :
        <span className="block text-gray-800 font-medium">{value}</span>
      }
    </div>
  )
}
