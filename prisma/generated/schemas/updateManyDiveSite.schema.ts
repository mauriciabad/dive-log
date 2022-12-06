import { z } from "zod";
import { DiveSiteUpdateManyMutationInputObjectSchema } from "./objects/DiveSiteUpdateManyMutationInput.schema";
import { DiveSiteWhereInputObjectSchema } from "./objects/DiveSiteWhereInput.schema";

export const DiveSiteUpdateManySchema = z.object({
  data: DiveSiteUpdateManyMutationInputObjectSchema,
  where: DiveSiteWhereInputObjectSchema.optional(),
});
