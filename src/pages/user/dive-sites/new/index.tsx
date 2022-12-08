import React from "react";
import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm, type RegisterOptions } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { CreateDiveSiteSchema } from "../../../../validators/DiveSite";
import type { FC, InputHTMLAttributes } from "react"
import {
  TbDeviceFloppy, TbInfoCircle, TbLicense, TbMapPin, TbPhoto
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import ErrorBox from "../../../../components/ErrorBox";
import classNames from "classnames"
import type { IconType } from "react-icons";
import type { z } from "zod";

type Inputs = z.input<typeof CreateDiveSiteSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveSiteMutation = trpc.diveSite.createDiveSite.useMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSiteSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createDiveSiteMutation.mutateAsync({ data })
    router.push("/user/dive-sites");
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
      <label className="block w-full max-w-md m-x-auto">
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
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

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
          displayLabel="Description"
          internalLabel="description"
          registerOptions={{
            required: true,
          }}
          inputProps={{
            type: 'text',
            maxLength: 192,
            required: true,
          }}
          Icon={TbInfoCircle}
        />

        <CustomInput
          displayLabel="Image"
          internalLabel="image"
          registerOptions={{
            required: true,
          }}
          inputProps={{
            type: 'text',
            maxLength: 192,
            required: true,
          }}
          Icon={TbPhoto}
        />

        <CustomInput
          displayLabel="Latitude"
          internalLabel="latitude"
          registerOptions={{
            required: true,
            valueAsNumber: true,
          }}
          inputProps={{
            type: 'number',
            min: -90,
            max: 90,
            step: 0.000001,
            required: true,
          }}
          Icon={TbMapPin}
        />

        <CustomInput
          displayLabel="Longitude"
          internalLabel="longitude"
          registerOptions={{
            required: true,
            valueAsNumber: true,
          }}
          inputProps={{
            type: 'number',
            min: -90,
            max: 90,
            step: 0.000001,
            required: true,
          }}
          Icon={TbMapPin}
        />


        <div className="flex justify-center">
          <IconButton
            text="Save"
            Icon={TbDeviceFloppy}
            onClick={handleSubmit(onSubmit)}
            loading={createDiveSiteMutation.isLoading}
            className="flex mt-8 px-8"
          />
        </div>
      </div>

      {createDiveSiteMutation.error && <ErrorBox message={createDiveSiteMutation.error.message} className="mt-4" />}
    </form>
  );
};

CreateDivePage.title = 'New dive site'

export default CreateDivePage;

export const getServerSideProps = loginRequired
