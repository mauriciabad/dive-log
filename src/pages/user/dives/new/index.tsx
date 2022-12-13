import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm, useFieldArray } from "react-hook-form";
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
  TbBatteryCharging,
  TbLink,
  TbTrash,
  TbPlus,
  TbFile,
  TbPhoto,
  TbPaperclip
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import FormSection from "../../../../components/FormSection";
import type { z } from "zod";
import ErrorBox from "../../../../components/ErrorBox";
import InfoBox from "../../../../components/InfoBox";
import { makeCustomInputSelect } from "../../../../components/InputSelect";
import { makeCustomInputSimple } from "../../../../components/InputSimple";
import { makeCustomInputMultiline } from "../../../../components/inputs/InputMultiline";
import InputGroup from "../../../../components/inputs/InputGroup"
import { enumLabels, enumLabelsAsArray } from '../../../../parametrized-data/enumLabels'
import { useCreateDiveAutofill } from '../../../../hooks/useCreateDiveAutofill'

type Inputs = z.input<typeof CreateDiveSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()

  const { handleSubmit, formState, control, setValue } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSchema),
    // Default values are handled with useCreateDiveAutofill hook
  });

  const {
    isLoading: isAutofillLoading,
    isAutofilled
  } = useCreateDiveAutofill({ control, setValue })

  const makeCustomInputsProps = {
    control,
    errors: formState.errors,
    schema: CreateDiveSchema,
    theme: 'outline'
  } as const
  const CustomInputSimple = makeCustomInputSimple(makeCustomInputsProps)
  const CustomInputSelect = makeCustomInputSelect(makeCustomInputsProps)
  const CustomInputMultiline = makeCustomInputMultiline(makeCustomInputsProps)

  const onSubmit: SubmitHandler<Inputs> = async data => {
    data.duration *= 60 * 1000 // Convert from minutes to millisecpnds

    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }


  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links"
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {isAutofillLoading ? <InfoBox
        message="Trying to guess some fields..."
        className="mb-4"
      />
        :
        isAutofilled &&
        <InfoBox
          message="Some fields have been pre-filled based on your last dive"
          className="mb-4"
        />
      }

      <FormSection
        title="Basic"
        description="The minimum information you need to keep."
      >

        <CustomInputSimple
          label="Dive Number"
          internalLabel="diveNumber"
          Icon={TbHash}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Duration"
          note="in minutes"
          internalLabel="duration"
          Icon={TbHourglass}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Dive site"
          internalLabel="diveSiteId"
          Icon={TbMapPin}
          data={userCreatedDiveSites}
          displayValue={(diveSite) => String(diveSite?.name ?? '')}
          exposedProperty="id"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Date"
          internalLabel="startDateTime"
          Icon={TbCalendarTime}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbTag}
          className="col-span-12 sm:col-span-12"
        />
        <CustomInputSelect
          label="Dive type"
          internalLabel="type"
          Icon={TbFlag}
          data={enumLabelsAsArray(enumLabels.DiveType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Specialty dive type"
          internalLabel="specialtyDiveType"
          Icon={TbAward}
          data={enumLabelsAsArray(enumLabels.SpecialtyDiveType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Max. depth"
          note="in meters"
          internalLabel="maximumDepth"
          Icon={TbArrowBarToDown}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Avg. depth"
          note="in meters"
          internalLabel="averageDepth"
          Icon={TbFold}
          className="col-span-12 sm:col-span-6"
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
          className="col-span-12 sm:col-span-4"
        />
        <CustomInputSimple
          label="Avg. water temp."
          note="in celcius"
          internalLabel="waterAverageTemperature"
          Icon={TbTemperature}
          className="col-span-12 sm:col-span-4"
        />
        <CustomInputSimple
          label="Max. water temp."
          note="in celcius"
          internalLabel="waterMaximumTemperature"
          Icon={TbTemperaturePlus}
          className="col-span-12 sm:col-span-4"
        />
        <CustomInputSelect
          label="Water body"
          internalLabel="waterBody"
          Icon={TbDroplet}
          data={enumLabelsAsArray(enumLabels.WaterBody)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Water type"
          internalLabel="waterType"
          Icon={TbSalt}
          data={enumLabelsAsArray(enumLabels.WaterType)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Water entry"
          internalLabel="waterEntry"
          Icon={TbFall}
          data={enumLabelsAsArray(enumLabels.WaterEntry)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-12"
        />
        <CustomInputSelect
          label="Water current"
          internalLabel="waterCurrent"
          Icon={TbRipple}
          data={enumLabelsAsArray(enumLabels.WaterCurrent)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Water surface"
          internalLabel="waterSurface"
          Icon={TbHaze}
          data={enumLabelsAsArray(enumLabels.WaterSurface)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Weather"
          internalLabel="weather"
          Icon={TbCloud}
          data={enumLabelsAsArray(enumLabels.Weather)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Air temp."
          note="in celcius"
          internalLabel="airTemperature"
          Icon={TbWind}
          className="col-span-12 sm:col-span-6"
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
          className="col-span-12 sm:col-span-12"
        />
        <CustomInputSimple
          label="Start cylinder presure"
          note="in bar"
          internalLabel="startCylinderPresure"
          Icon={TbBattery4}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="End cylinder presure"
          note="in bar"
          internalLabel="endCylinderPresure"
          Icon={TbBattery1}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSimple
          label="Cylinder volume"
          note="in liters"
          internalLabel="cylinderVolume"
          Icon={TbBattery}
          className="col-span-12 sm:col-span-6"
        />
        <CustomInputSelect
          label="Cylinder material"
          internalLabel="cylinderMaterial"
          Icon={TbBatteryCharging}
          data={enumLabelsAsArray(enumLabels.CylinderMaterial)}
          displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
          exposedProperty="value"
          className="col-span-12 sm:col-span-6"
        />

        {/* Missing fields */}
        {/* equipment */}
      </FormSection>

      <FormSection
        title="People"
        description="Information about other divers and dive centers."
      >
        <div className="py-6 text-xl text-center text-gray-300 col-span-12">In development...</div>
        {/* Missing fields */}
        {/* Lining to other db entities */}
        {/* diveCenter */}
        {/* diveBuddies */}
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
        <CustomInputSimple
          label="Rating"
          note="from 0 to 10"
          internalLabel="rating"
          Icon={TbStar}
          className="col-span-12 sm:col-span-12"
        />
        <CustomInputMultiline
          label="Experience notes"
          internalLabel="experienceNotes"
          Icon={TbLicense}
          className="col-span-12 sm:col-span-12"
        />
        <CustomInputMultiline
          label="Technical notes"
          internalLabel="technicalNotes"
          Icon={TbLicense}
          className="col-span-12 sm:col-span-12"
        />

        <div className="col-span-12">
          <InputGroup
            label="Attechments"
            Icon={TbPaperclip}
          >
            {fields.map((item, index) => (
              <div key={item.id} className="grid grid-cols-[repeat(6,1fr),auto] items-end col-span-12 gap-4 p-4 border-b-2 border-gray-200">
                <CustomInputSimple
                  label="Title"
                  internalLabel={`links.${index}.title`}
                  Icon={TbTag}
                  className="col-span-4"
                />
                <CustomInputSelect
                  label="Type"
                  internalLabel={`links.${index}.type`}
                  Icon={TbFile}
                  data={enumLabelsAsArray(enumLabels.LinkType)}
                  displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
                  exposedProperty="value"
                  className="col-span-3"
                />
                <CustomInputSimple
                  label="Link"
                  internalLabel={`links.${index}.link`}
                  Icon={TbLink}
                  className="col-span-3"
                />
                <CustomInputSimple
                  label="Thumbnail"
                  internalLabel={`links.${index}.thumbnail`}
                  Icon={TbPhoto}
                  className="col-span-3"
                />
                <IconButton
                  text="Delete"
                  onClick={() => remove(index)}
                  Icon={TbTrash}
                  onlyIcon
                />
              </div>
            ))}
            <div className="col-span-12 sm:col-span-12 p-4 text-center">
              <IconButton
                text="Add attechment"
                onClick={() => append({
                  link: '',
                  type: 'OTHER',
                })}
                Icon={TbPlus}
              />
            </div>
          </InputGroup>
        </div>

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
    </form >
  );
};

CreateDivePage.title = 'New dive'

export default CreateDivePage;

