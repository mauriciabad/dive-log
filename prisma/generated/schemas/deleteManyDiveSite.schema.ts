import { z } from "zod";
import { DiveSiteWhereInputObjectSchema } from "./objects/DiveSiteWhereInput.schema";

export const DiveSiteDeleteManySchema = z.object({
  where: DiveSiteWhereInputObjectSchema.optional(),
});
