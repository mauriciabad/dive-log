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
  TbMapPin
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import type { z } from "zod";
import ErrorBox from "../../../../components/ErrorBox";
import { makeCustomInputSelect } from "../../../../components/InputSelect";
import { makeCustomInputSimple } from "../../../../components/InputSimple";

type Inputs = z.input<typeof CreateDiveSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { handleSubmit, formState: { errors }, control } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSchema),
    defaultValues: {
      startDateTime: new Date(),
      diveNumber: 1,
      waterAverageTemperature: 30,
      maximumDepth: 18,
      name: 'Test dive',
      duration: 71,
    }
  });
  const CustomInputSimple = makeCustomInputSimple({ control, errors, schema: CreateDiveSchema })
  const CustomInputSelect = makeCustomInputSelect({ control, errors, schema: CreateDiveSchema })

  const onSubmit: SubmitHandler<Inputs> = async data => {
    data.duration *= 60 * 1000 // Convert from minutes to millisecpnds

    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }

  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="grid gap-4 items-end sm:grid-cols-3 ">

        <CustomInputSimple
          label="Dive Number"
          internalLabel="diveNumber"
          Icon={TbHash}
        />

        <CustomInputSimple
          label="Date"
          internalLabel="startDateTime"
          Icon={TbCalendarTime}
        />

        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbLicense}
        />

        <CustomInputSimple
          label="Duration (in minutes)"
          internalLabel="duration"
          Icon={TbHourglass}
        />

        <CustomInputSimple
          label="Max depth"
          internalLabel="maximumDepth"
          Icon={TbArrowBarToDown}
        />

        <CustomInputSimple
          label="Avg. depth"
          internalLabel="averageDepth"
          Icon={TbFold}
        />

        <CustomInputSelect
          label="Dive site"
          internalLabel="diveSiteId"
          Icon={TbMapPin}
          data={userCreatedDiveSites}
          displayValue={(diveSite) => String(diveSite?.name ?? '')}
          exposedProperty="id"
        />

        <CustomInputSimple
          label="Average Water temperature"
          internalLabel="waterAverageTemperature"
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

