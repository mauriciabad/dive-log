import { trpc } from "../../../../utils/trpc";
import type { CustomNextPage } from "../../../_app";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DiveCreateInputObjectSchema } from '../../../../../prisma/generated/schemas/objects/DiveCreateInput.schema';
import type { z } from "zod";
import { useRouter } from "next/router";

type Inputs = z.output<typeof DiveCreateInputObjectSchema>

const CreateDive: CustomNextPage = () => {
  const router = useRouter();
  const createDiveMutation = trpc.dive.createDive.useMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(DiveCreateInputObjectSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    await createDiveMutation.mutateAsync({ data })
    router.push("/user/dives");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <label >
        Date
        <input type="datetime-local" defaultValue={(new Date()).toISOString().substring(0, 16)} {...register("date", {
          required: true,
          valueAsDate: true,
        })} className="bg-black/20 mx-2 px-2 py-1 rounded-md" />
        {errors.date && <span>This field is required</span>}
      </label>
      <label>
        Max depth
        <input type="number" min="0" {...register("maxDepth", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })} className="bg-black/20 mx-2 px-2 py-1 rounded-md" />
        {errors.maxDepth && <span>This field is required</span>}
      </label>

      <label>
        Water Temperature
        <input type="number" min="0" {...register("waterTemp", {
          required: true,
          valueAsNumber: true,
          min: 0,
        })} className="bg-black/20 mx-2 px-2 py-1 rounded-md" />
        {errors.waterTemp && <span>This field is required</span>}
      </label>
      <label>
        Location name
        <input type="text" maxLength={100} {...register("locationName", {
          maxLength: 100,
          required: true,
        })} className="bg-black/20 mx-2 px-2 py-1 rounded-md" />
        {errors.locationName && <span>This field is required</span>}
      </label>

      <input type="submit" disabled={createDiveMutation.isLoading} className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
      />
      {createDiveMutation.error && <p>Something went wrong! {createDiveMutation.error.message}</p>}
    </form>
  );
};

CreateDive.title = 'New dive'

export default CreateDive;

// export const getServerSideProps = loginRequired