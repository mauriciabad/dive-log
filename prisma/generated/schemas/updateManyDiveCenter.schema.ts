import { z } from "zod";
import { DiveCenterUpdateManyMutationInputObjectSchema } from "./objects/DiveCenterUpdateManyMutationInput.schema";
import { DiveCenterWhereInputObjectSchema } from "./objects/DiveCenterWhereInput.schema";

export const DiveCenterUpdateManySchema = z.object({
  data: DiveCenterUpdateManyMutationInputObjectSchema,
  where: DiveCenterWhereInputObjectSchema.optional(),
});
