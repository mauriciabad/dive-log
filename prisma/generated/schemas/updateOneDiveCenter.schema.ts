import { z } from "zod";
import { DiveCenterUpdateInputObjectSchema } from "./objects/DiveCenterUpdateInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";

export const DiveCenterUpdateOneSchema = z.object({
  data: DiveCenterUpdateInputObjectSchema,
  where: DiveCenterWhereUniqueInputObjectSchema,
});
