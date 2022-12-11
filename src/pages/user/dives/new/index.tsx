import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { CreateDiveSchema } from "../../../../validators/Dive";
import {
  TbTemperature,
  TbArrowBarToDown,
  TbCalendarTime,
  TbDeviceFloppy,
  TbHash,
  TbLicense,
  TbHourglass,
  TbFold,
  TbMapPin,
  TbTemperatureMinus,
  TbTemperaturePlus,
  TbWind,
  TbBarbell,
  TbBattery,
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
  TbBatteryCharging
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import FormSection from "../../../../components/FormSection";
import type { z } from "zod";
import ErrorBox from "../../../../components/ErrorBox";
import InfoBox from "../../../../components/InfoBox";
import { makeCustomInputSelect } from "../../../../components/InputSelect";
import { makeCustomInputSimple } from "../../../../components/InputSimple";
import { useEffect } from "react";
import { enumLabels, enumLabelsAsArray } from '../../../../parametrized-data/enumLabels'

type Inputs = z.input<typeof CreateDiveSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { handleSubmit, formState, control, setValue } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSchema),
    defaultValues: {
      startDateTime: new Date(),
    }
  });
  const CustomInputSimple = makeCustomInputSimple({ control, errors: formState.errors, schema: CreateDiveSchema, theme: 'outline' })
  const CustomInputSelect = makeCustomInputSelect({ control, errors: formState.errors, schema: CreateDiveSchema, theme: 'outline' })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    data.duration *= 60 * 1000 // Convert from minutes to millisecpnds

    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }
  const { data: lastDive } = trpc.dive.getLastDive.useQuery();
  useEffect(() => {
    if (lastDive && !control.getFieldState('diveNumber').isDirty) setValue('diveNumber', lastDive['diveNumber'] + 1)
    if (lastDive && !control.getFieldState('waterAverageTemperature').isDirty) setValue('waterAverageTemperature', lastDive['waterAverageTemperature'] ?? undefined)
  })

  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {lastDive && <InfoBox
        message="Some fields have been pre-filled based on your last dive"
        className="mb-4"
      />}

      <FormSection
        title="Basic"
        description="The minimum information you need to keep."
      >

        <CustomInputSimple
          label="Dive Number"
          internalLabel="diveNumber"
          Icon={TbHash}
          inputProps={{
            placeholder: lastDive ? String(lastDive.diveNumber + 1) : undefined
          }}
        />
        <CustomInputSimple
          label="Date"
          internalLabel="startDateTime"
          Icon={TbCalendarTime}
        />
        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbTag}
        />
        <CustomInputSimple
          label="Duration"
          note="in minutes"
          internalLabel="duration"
          Icon={TbHourglass}
        />
        <CustomInputSelect
          label="Dive site"
          internalLabel="diveSiteId"
          Icon={TbMapPin}
          data={userCreatedDiveSites}
          displayValue={(diveSite) => String(diveSite?.name ?? '')}
          exposedProperty="id"
        />
        <CustomInputSelect
          label="Dive type"
          internalLabel="type"
          Icon={TbFlag}
          data={enumLabelsAsArray(enumLabels.DiveType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Specialty dive type"
          internalLabel="specialtyDiveType"
          Icon={TbAward}
          data={enumLabelsAsArray(enumLabels.SpecialtyDiveType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSimple
          label="Max. depth"
          note="in meters"
          internalLabel="maximumDepth"
          Icon={TbArrowBarToDown}
        />
        <CustomInputSimple
          label="Avg. depth"
          note="in meters"
          internalLabel="averageDepth"
          Icon={TbFold}
        />
      </FormSection>

      <FormSection
        title="Environment"
        description="Information about the conditions you dived in."
      >
        <CustomInputSimple
          label="Min. water temp."
          note="in celcius"
          internalLabel="waterMinimumTemperature"
          Icon={TbTemperatureMinus}
        />
        <CustomInputSimple
          label="Avg. water temp."
          note="in celcius"
          internalLabel="waterAverageTemperature"
          Icon={TbTemperature}
        />
        <CustomInputSimple
          label="Max. water temp."
          note="in celcius"
          internalLabel="waterMaximumTemperature"
          Icon={TbTemperaturePlus}
        />
        <CustomInputSelect
          label="Water body"
          internalLabel="waterBody"
          Icon={TbDroplet}
          data={enumLabelsAsArray(enumLabels.WaterBody)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Water type"
          internalLabel="waterType"
          Icon={TbSalt}
          data={enumLabelsAsArray(enumLabels.WaterType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Water entry"
          internalLabel="waterEntry"
          Icon={TbFall}
          data={enumLabelsAsArray(enumLabels.WaterEntry)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Water current"
          internalLabel="waterCurrent"
          Icon={TbRipple}
          data={enumLabelsAsArray(enumLabels.WaterCurrent)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Water surface"
          internalLabel="waterSurface"
          Icon={TbHaze}
          data={enumLabelsAsArray(enumLabels.WaterSurface)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSelect
          label="Weather"
          internalLabel="weather"
          Icon={TbCloud}
          data={enumLabelsAsArray(enumLabels.Weather)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />
        <CustomInputSimple
          label="Air temp."
          note="in celcius"
          internalLabel="airTemperature"
          Icon={TbWind}
        />
      </FormSection>

      <FormSection
        title="Equipment"
        description="Information related to the equipment you used."
      >
        <CustomInputSimple
          label="Weight"
          note="in kilograms"
          internalLabel="weight"
          // TODO: This icon is better, but not avilable in react icons. update the lib
          // Icon={TbWeight} 
          Icon={TbBarbell}
        />
        <CustomInputSimple
          label="Start cylinder presure"
          note="in bar"
          internalLabel="startCylinderPresure"
          Icon={TbBattery4}
        />
        <CustomInputSimple
          label="End cylinder presure"
          note="in bar"
          internalLabel="endCylinderPresure"
          Icon={TbBattery1}
        />
        <CustomInputSimple
          label="Cylinder volume"
          note="in liters"
          internalLabel="cylinderVolume"
          Icon={TbBattery}
        />
        <CustomInputSelect
          label="Cylinder material"
          internalLabel="cylinderMaterial"
          Icon={TbBatteryCharging}
          data={enumLabelsAsArray(enumLabels.CylinderMaterial)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
        />

        {/* Missing fields */}
        {/* equipment */}
      </FormSection>

      <FormSection
        title="People"
        description="Information about other divers and dive centers."
      >
        <div className="py-6 text-xl text-center text-gray-400">In development...</div>
        {/* Missing fields */}
        {/* Lining to other db entities */}
        {/* diveCenter */}
        {/* diveBuddies */}
      </FormSection>

      <FormSection
        title="Organisms"
        description="Creatures you saw that you consider relevant."
      >
        <div className="py-6 text-xl text-center text-gray-400">In development...</div>
        {/* Missing fields */}
        {/* Lining to other db entities */}
        {/* organisms */}
      </FormSection>

      <FormSection
        title="Personal"
        description="So you don't forget what happened during the dive."
        separator={false}
      >
        <CustomInputSimple
          label="Rating"
          note="from 0 to 10"
          internalLabel="rating"
          Icon={TbStar}
        />
        <CustomInputSimple
          label="Experience notes"
          internalLabel="experienceNotes"
          Icon={TbLicense}
        />
        <CustomInputSimple
          label="Technical notes"
          internalLabel="technicalNotes"
          Icon={TbLicense}
        />

        {/* Missing fields */}
        {/* Lining to other db entities */}
        {/* links */}
      </FormSection>

      <div className="flex justify-center">
        <IconButton
          text="Save"
          Icon={TbDeviceFloppy}
          onClick={handleSubmit(onSubmit)}
          disabled={createDiveMutation.isLoading}
          className="flex mt-8 px-8"
        />
      </div>

      {createDiveMutation.error && <ErrorBox message={createDiveMutation.error.message} className="mt-4" />}
    </form>
  );
};

CreateDivePage.title = 'New dive'

export default CreateDivePage;

