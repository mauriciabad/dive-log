import React from "react";
import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import loginRequired from "../../../../utils/loginRequired";
import { CreateDiveSiteSchema } from "../../../../validators/DiveSite";
import {
  TbDeviceFloppy, TbInfoCircle, TbPhoto, TbTag, TbWorldLatitude, TbWorldLongitude
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import { makeCustomInputSimple } from "../../../../components/InputSimple";
import ErrorBox from "../../../../components/ErrorBox";
import type { z } from "zod";

type Inputs = z.input<typeof CreateDiveSiteSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();

  const createDiveSiteMutation = trpc.diveSite.createDiveSite.useMutation()

  const { handleSubmit, control, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSiteSchema),
  });
  const CustomInputSimple = makeCustomInputSimple({ control, errors, schema: CreateDiveSiteSchema })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createDiveSiteMutation.mutateAsync({ data })
    router.push("/user/dive-sites");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbTag}
        />

        <CustomInputSimple
          label="Description"
          internalLabel="description"
          Icon={TbInfoCircle}
        />

        <CustomInputSimple
          label="Image"
          internalLabel="image"
          Icon={TbPhoto}
        />

        <CustomInputSimple
          label="Latitude"
          internalLabel="latitude"
          inputProps={{
            step: 0.000001,
          }}
          Icon={TbWorldLatitude}
        />

        <CustomInputSimple
          label="Longitude"
          internalLabel="longitude"
          inputProps={{
            step: 0.000001,
          }}
          Icon={TbWorldLongitude}
        />


      </div>
      <div className="flex justify-center">
        <IconButton
          text="Save"
          Icon={TbDeviceFloppy}
          onClick={handleSubmit(onSubmit)}
          loading={createDiveSiteMutation.isLoading}
          className="flex mt-8 px-8"
        />
      </div>

      {createDiveSiteMutation.error && <ErrorBox message={createDiveSiteMutation.error.message} className="mt-4" />}
    </form>
  );
};

CreateDivePage.title = 'New dive site'

export default CreateDivePage;

export const getServerSideProps = loginRequired
