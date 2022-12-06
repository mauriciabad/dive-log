import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./objects/DiveCenterWhereInput.schema";
import { DiveCenterOrderByWithRelationInputObjectSchema } from "./objects/DiveCenterOrderByWithRelationInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";
import { DiveCenterScalarFieldEnumSchema } from "./enums/DiveCenterScalarFieldEnum.schema";

export const DiveCenterFindFirstSchema = z.object({
  where: DiveCenterWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveCenterOrderByWithRelationInputObjectSchema,
      DiveCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiveCenterScalarFieldEnumSchema).optional(),
});
