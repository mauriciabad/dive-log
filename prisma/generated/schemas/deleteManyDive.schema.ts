import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./objects/DiveWhereInput.schema";

export const DiveDeleteManySchema = z.object({
  where: DiveWhereInputObjectSchema.optional(),
});
