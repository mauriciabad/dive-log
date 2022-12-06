import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./objects/DiveBuddyWhereInput.schema";
import { DiveBuddyOrderByWithRelationInputObjectSchema } from "./objects/DiveBuddyOrderByWithRelationInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyScalarFieldEnumSchema } from "./enums/DiveBuddyScalarFieldEnum.schema";

export const DiveBuddyFindManySchema = z.object({
  where: DiveBuddyWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveBuddyOrderByWithRelationInputObjectSchema,
      DiveBuddyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveBuddyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiveBuddyScalarFieldEnumSchema).optional(),
});
