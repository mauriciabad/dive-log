import { z } from "zod";
import { DiveUpdateManyMutationInputObjectSchema } from "./objects/DiveUpdateManyMutationInput.schema";
import { DiveWhereInputObjectSchema } from "./objects/DiveWhereInput.schema";

export const DiveUpdateManySchema = z.object({
  data: DiveUpdateManyMutationInputObjectSchema,
  where: DiveWhereInputObjectSchema.optional(),
});
