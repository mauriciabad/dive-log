import { z } from "zod";
import { VerificationTokenWhereInputObjectSchema } from "./objects/VerificationTokenWhereInput.schema";
import { VerificationTokenOrderByWithRelationInputObjectSchema } from "./objects/VerificationTokenOrderByWithRelationInput.schema";
import { VerificationTokenWhereUniqueInputObjectSchema } from "./objects/VerificationTokenWhereUniqueInput.schema";
import { VerificationTokenCountAggregateInputObjectSchema } from "./objects/VerificationTokenCountAggregateInput.schema";
import { VerificationTokenMinAggregateInputObjectSchema } from "./objects/VerificationTokenMinAggregateInput.schema";
import { VerificationTokenMaxAggregateInputObjectSchema } from "./objects/VerificationTokenMaxAggregateInput.schema";

export const VerificationTokenAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), VerificationTokenCountAggregateInputObjectSchema])
    .optional(),
  _min: VerificationTokenMinAggregateInputObjectSchema.optional(),
  _max: VerificationTokenMaxAggregateInputObjectSchema.optional(),
});
