import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";
import { DiveCreateInputObjectSchema } from "./objects/DiveCreateInput.schema";
import { DiveUpdateInputObjectSchema } from "./objects/DiveUpdateInput.schema";

export const DiveUpsertSchema = z.object({
  where: DiveWhereUniqueInputObjectSchema,
  create: DiveCreateInputObjectSchema,
  update: DiveUpdateInputObjectSchema,
});
