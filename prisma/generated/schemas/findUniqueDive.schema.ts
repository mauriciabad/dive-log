import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";

export const DiveFindUniqueSchema = z.object({
  where: DiveWhereUniqueInputObjectSchema,
});
