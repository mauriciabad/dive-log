import { z } from "zod";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./objects/DiveBuddyInDiveWhereInput.schema";
import { DiveBuddyInDiveOrderByWithRelationInputObjectSchema } from "./objects/DiveBuddyInDiveOrderByWithRelationInput.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveScalarFieldEnumSchema } from "./enums/DiveBuddyInDiveScalarFieldEnum.schema";

export const DiveBuddyInDiveFindFirstSchema = z.object({
  where: DiveBuddyInDiveWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveBuddyInDiveOrderByWithRelationInputObjectSchema,
      DiveBuddyInDiveOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveBuddyInDiveWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiveBuddyInDiveScalarFieldEnumSchema).optional(),
});
