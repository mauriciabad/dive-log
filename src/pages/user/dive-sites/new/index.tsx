import React from "react";
import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { CreateDiveSiteSchema } from "../../../../validators/DiveSite";
import {
  TbDeviceFloppy, TbInfoCircle, TbLicense, TbMapPin, TbPhoto
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import InputSimple from "../../../../components/InputSimple";
import ErrorBox from "../../../../components/ErrorBox";
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

        <InputSimple
          register={register}
          error={errors.name}
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

        <InputSimple
          register={register}
          error={errors.description}
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

        <InputSimple
          register={register}
          error={errors.image}
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

        <InputSimple
          register={register}
          error={errors.latitude}
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

        <InputSimple
          register={register}
          error={errors.longitude}
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
