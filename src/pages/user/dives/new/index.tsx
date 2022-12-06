import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { DiveValidator } from "../../../../validators/dives";
import type { FC, InputHTMLAttributes } from "react"
import { TbTemperature, TbArrowBarToDown, TbCalendarTime, TbDeviceFloppy } from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import classNames from "classnames"
import type { IconType } from "react-icons";

type Inputs = z.output<typeof DiveValidator>

const CreateDive: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(DiveValidator)
  });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }

  const CustomInput: FC<{
    displayLabel: string,
    internalLabel: keyof Inputs,
    registerOptions: Parameters<typeof register>[1],
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
          }</span>
        </div>
        <input
          {...inputProps}
          {...register(internalLabel, registerOptions)}
          className={classNames({
            'border-red-500 border-2': errors[internalLabel],
          }, "block bg-white rounded shadow py-1 px-2 w-full min-w-0")}
        />
        {errors[internalLabel] &&
          <span className="text-sm text-red-500">This field is required</span>
        }
      </label>
    </>)

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end justify-center sm:grid-cols-3 ">


        <CustomInput
          displayLabel="Date"
          internalLabel="startDateTime"
          registerOptions={{
            required: true,
            valueAsDate: true,
          }}
          inputProps={{
            type: 'datetime-local',
            defaultValue: (new Date()).toISOString().substring(0, 16),
            required: true,
          }}
          Icon={TbCalendarTime}
        />

        <CustomInput
          displayLabel="Max depth"
          internalLabel="maximumDepth"
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

CreateDive.title = 'New dive'

export default CreateDive;

export const getServerSideProps = loginRequired
