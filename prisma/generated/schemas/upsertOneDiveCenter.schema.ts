import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";
import { DiveCenterCreateInputObjectSchema } from "./objects/DiveCenterCreateInput.schema";
import { DiveCenterUpdateInputObjectSchema } from "./objects/DiveCenterUpdateInput.schema";

export const DiveCenterUpsertSchema = z.object({
  where: DiveCenterWhereUniqueInputObjectSchema,
  create: DiveCenterCreateInputObjectSchema,
  update: DiveCenterUpdateInputObjectSchema,
});
