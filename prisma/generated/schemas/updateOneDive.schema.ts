import { z } from "zod";
import { DiveUpdateInputObjectSchema } from "./objects/DiveUpdateInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";

export const DiveUpdateOneSchema = z.object({
  data: DiveUpdateInputObjectSchema,
  where: DiveWhereUniqueInputObjectSchema,
});
