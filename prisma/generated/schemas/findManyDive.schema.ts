import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./objects/DiveWhereInput.schema";
import { DiveOrderByWithRelationInputObjectSchema } from "./objects/DiveOrderByWithRelationInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";
import { DiveScalarFieldEnumSchema } from "./enums/DiveScalarFieldEnum.schema";

export const DiveFindManySchema = z.object({
  where: DiveWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveOrderByWithRelationInputObjectSchema,
      DiveOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiveScalarFieldEnumSchema).optional(),
});
