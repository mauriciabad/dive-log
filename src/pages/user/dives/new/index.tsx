import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm, type RegisterOptions } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { CreateDiveSchema } from "../../../../validators/Dive";
import type { FC, InputHTMLAttributes } from "react"
import {
  TbTemperature,
  TbArrowBarToDown,
  TbCalendarTime,
  TbDeviceFloppy,
  TbHash,
  TbLicense,
  TbHourglass,
  TbFold,
  TbMapPin
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import Selector from "../../../../components/Selector";
import classNames from "classnames"
import type { IconType } from "react-icons";
import type { z } from "zod";
import ErrorBox from "../../../../components/ErrorBox";
import InputSimple from "../../../../components/InputSimple";
import InputSelect from "../../../../components/InputSelect";

type Inputs = z.input<typeof CreateDiveSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSchema),
    defaultValues: {
      startDateTime: new Date().toISOString().slice(0, 16),
      diveNumber: 1,
      waterAverageTemperature: 30,
      maximumDepth: 18,
      name: 'Test dive',
      duration: 71,
    }
  });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    data.duration *= 60 * 1000 // Convert from minutes to millisecpnds

    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }

  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

        <InputSimple
          register={register}
          error={errors.diveNumber}
          displayLabel="Dive Number"
          internalLabel="diveNumber"
          registerOptions={{
            valueAsNumber: true,
            min: 1,
            required: true,
          }}
          inputProps={{
            type: 'number',
            min: 1,
            required: true,
          }}
          Icon={TbHash}
        />

        <InputSimple
          register={register}
          error={errors.startDateTime}
          displayLabel="Date"
          internalLabel="startDateTime"
          registerOptions={{
            required: true,
          }}
          inputProps={{
            type: 'datetime-local',
          }}
          Icon={TbCalendarTime}
        />

        <InputSimple
          register={register}
          error={errors.name}
          displayLabel="Name"
          internalLabel="name"
          registerOptions={{
            required: true,
            maxLength: 192,
          }}
          inputProps={{
            type: 'text',
          }}
          Icon={TbLicense}
        />

        <InputSimple
          register={register}
          error={errors.duration}
          displayLabel="Duration (in minutes)"
          internalLabel="duration"
          registerOptions={{
            valueAsNumber: true,
          }}
          inputProps={{
            type: 'number',
          }}
          Icon={TbHourglass}
        />

        <InputSimple
          register={register}
          error={errors.maximumDepth}
          displayLabel="Max depth"
          internalLabel="maximumDepth"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
            required: true,
          }}
          inputProps={{
            type: 'number',
          }}
          Icon={TbArrowBarToDown}
        />

        <InputSimple
          register={register}
          error={errors.averageDepth}
          displayLabel="Avg. depth"
          internalLabel="averageDepth"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
          }}
          inputProps={{
            type: 'number',
          }}
          Icon={TbFold}
        />

        <InputSelect
          register={register}
          error={errors.diveSiteId}
          displayLabel="Dive site"
          internalLabel="diveSiteId"
          registerOptions={{
            required: true,
          }}
          Icon={TbMapPin}
          data={userCreatedDiveSites}
          displayValue={(diveSite) => diveSite.name}
          returnValue={(diveSite) => diveSite.id}
        />

        <InputSimple
          register={register}
          error={errors.waterAverageTemperature}
          displayLabel="Average Water temperature"
          internalLabel="waterAverageTemperature"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
          }}
          inputProps={{
            type: 'number',
          }}
          Icon={TbTemperature}
        />
      </div>

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

export const getServerSideProps = loginRequired
