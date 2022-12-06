import { z } from "zod";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./objects/DiveBuddyInDiveWhereInput.schema";
import { DiveBuddyInDiveOrderByWithRelationInputObjectSchema } from "./objects/DiveBuddyInDiveOrderByWithRelationInput.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveCountAggregateInputObjectSchema } from "./objects/DiveBuddyInDiveCountAggregateInput.schema";
import { DiveBuddyInDiveMinAggregateInputObjectSchema } from "./objects/DiveBuddyInDiveMinAggregateInput.schema";
import { DiveBuddyInDiveMaxAggregateInputObjectSchema } from "./objects/DiveBuddyInDiveMaxAggregateInput.schema";

export const DiveBuddyInDiveAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), DiveBuddyInDiveCountAggregateInputObjectSchema])
    .optional(),
  _min: DiveBuddyInDiveMinAggregateInputObjectSchema.optional(),
  _max: DiveBuddyInDiveMaxAggregateInputObjectSchema.optional(),
});
