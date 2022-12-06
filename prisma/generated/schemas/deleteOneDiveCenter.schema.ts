import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";

export const DiveCenterDeleteOneSchema = z.object({
  where: DiveCenterWhereUniqueInputObjectSchema,
});
