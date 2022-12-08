import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm, type RegisterOptions } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { CreateDiveSchema } from "../../../../validators/Dive";
import type { FC, InputHTMLAttributes } from "react"
import {
  TbTemperature, TbArrowBarToDown, TbCalendarTime, TbDeviceFloppy, TbHash,
  TbLicense,
  TbHourglass
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import classNames from "classnames"
import type { IconType } from "react-icons";
import type { z } from "zod";

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


  const CustomInput: FC<{
    displayLabel: string,
    internalLabel: keyof Inputs,
    registerOptions: RegisterOptions<Inputs>,
    inputProps: InputHTMLAttributes<HTMLInputElement>,
    Icon?: IconType
  }> =
    ({
      displayLabel,
      internalLabel,
      registerOptions,
      inputProps,
      Icon
    }) => (<>
      <label className="block max-w-xs">
        <div className="flex items-center text-gray-800 text-sm">
          {Icon && <Icon className="h-4 w-4 mr-0.5" />}
          <span className="" >{displayLabel}{
            registerOptions?.required && <span className="text-red-400 ml-1">*</span>
          }{errors[internalLabel] &&
            <span className="text-red-500 ml-2"><>{errors[internalLabel]?.message}</></span>
            }</span>

        </div>
        <input
          {...inputProps}
          {...register(internalLabel, registerOptions)}
          className={classNames({
            'border-red-500 border-2 m-[-2px]': errors[internalLabel],
          }, "block bg-white rounded shadow py-2 px-4 w-full min-w-0 mt-1")}
        />

      </label>
    </>)

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end justify-center sm:grid-cols-3 ">

        <CustomInput
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

        <CustomInput
          displayLabel="Date"
          internalLabel="startDateTime"
          registerOptions={{
            required: true,
          }}
          inputProps={{
            type: 'datetime-local',
            required: true,
          }}
          Icon={TbCalendarTime}
        />

        <CustomInput
          displayLabel="Name"
          internalLabel="name"
          registerOptions={{
            required: true,
          }}
          inputProps={{
            type: 'text',
            maxLength: 192,
            required: true,
          }}
          Icon={TbLicense}
        />

        <CustomInput
          displayLabel="Duration (in minutes)"
          internalLabel="duration"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
            max: 24 * 60,
            required: true,
          }}
          inputProps={{
            type: 'number',
            min: 0,
            max: 24 * 60,
            required: true,
          }}
          Icon={TbHourglass}
        />

        <CustomInput
          displayLabel="Max depth"
          internalLabel="maximumDepth"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
            required: true,
          }}
          inputProps={{
            type: 'number',
            min: 0,
            required: true,
          }}
          Icon={TbArrowBarToDown}
        />

        <CustomInput
          displayLabel="Avg. depth"
          internalLabel="averageDepth"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
          }}
          inputProps={{
            type: 'number',
            min: 0,
          }}
          Icon={TbArrowBarToDown}
        />

        {/* <CustomInput
          displayLabel="Dive site"
          internalLabel="diveSite"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
            required: true,
          }}
          inputProps={{
            type: 'number',
            min: 0,
            required: true,
          }}
          Icon={TbArrowBarToDown}
        /> */}

        <CustomInput
          displayLabel="Average Water temperature"
          internalLabel="waterAverageTemperature"
          registerOptions={{
            valueAsNumber: true,
            min: 0,
          }}
          inputProps={{
            type: 'number',
            min: 0,
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

      {createDiveMutation.error && <p>Something went wrong! {createDiveMutation.error.message}</p>}
    </form>
  );
};

CreateDivePage.title = 'New dive'

export default CreateDivePage;

export const getServerSideProps = loginRequired
