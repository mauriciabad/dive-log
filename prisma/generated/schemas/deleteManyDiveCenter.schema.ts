import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./objects/DiveCenterWhereInput.schema";

export const DiveCenterDeleteManySchema = z.object({
  where: DiveCenterWhereInputObjectSchema.optional(),
});
