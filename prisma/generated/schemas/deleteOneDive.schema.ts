import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";

export const DiveDeleteOneSchema = z.object({
  where: DiveWhereUniqueInputObjectSchema,
});
