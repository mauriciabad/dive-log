import { z } from "zod";
import { AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema";
import { AccountOrderByWithRelationInputObjectSchema } from "./objects/AccountOrderByWithRelationInput.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";
import { AccountScalarFieldEnumSchema } from "./enums/AccountScalarFieldEnum.schema";

export const AccountFindFirstSchema = z.object({
  where: AccountWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AccountOrderByWithRelationInputObjectSchema,
      AccountOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: AccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AccountScalarFieldEnumSchema).optional(),
});
