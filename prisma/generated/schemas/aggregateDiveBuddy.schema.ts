import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./objects/DiveBuddyWhereInput.schema";
import { DiveBuddyOrderByWithRelationInputObjectSchema } from "./objects/DiveBuddyOrderByWithRelationInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCountAggregateInputObjectSchema } from "./objects/DiveBuddyCountAggregateInput.schema";
import { DiveBuddyMinAggregateInputObjectSchema } from "./objects/DiveBuddyMinAggregateInput.schema";
import { DiveBuddyMaxAggregateInputObjectSchema } from "./objects/DiveBuddyMaxAggregateInput.schema";

export const DiveBuddyAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), DiveBuddyCountAggregateInputObjectSchema])
    .optional(),
  _min: DiveBuddyMinAggregateInputObjectSchema.optional(),
  _max: DiveBuddyMaxAggregateInputObjectSchema.optional(),
});
