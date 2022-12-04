import { z } from "zod";
import { VerificationTokenWhereInputObjectSchema } from "./objects/VerificationTokenWhereInput.schema";
import { VerificationTokenOrderByWithRelationInputObjectSchema } from "./objects/VerificationTokenOrderByWithRelationInput.schema";
import { VerificationTokenWhereUniqueInputObjectSchema } from "./objects/VerificationTokenWhereUniqueInput.schema";
import { VerificationTokenScalarFieldEnumSchema } from "./enums/VerificationTokenScalarFieldEnum.schema";

export const VerificationTokenFindFirstSchema = z.object({
  where: VerificationTokenWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VerificationTokenOrderByWithRelationInputObjectSchema,
      VerificationTokenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: VerificationTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VerificationTokenScalarFieldEnumSchema).optional(),
});
