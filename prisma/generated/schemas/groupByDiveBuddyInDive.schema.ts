import { z } from "zod";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./objects/DiveBuddyInDiveWhereInput.schema";
import { DiveBuddyInDiveOrderByWithAggregationInputObjectSchema } from "./objects/DiveBuddyInDiveOrderByWithAggregationInput.schema";
import { DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema } from "./objects/DiveBuddyInDiveScalarWhereWithAggregatesInput.schema";
import { DiveBuddyInDiveScalarFieldEnumSchema } from "./enums/DiveBuddyInDiveScalarFieldEnum.schema";

export const DiveBuddyInDiveGroupBySchema = z.object({
  where: DiveBuddyInDiveWhereInputObjectSchema.optional(),
  orderBy: z.union([
    DiveBuddyInDiveOrderByWithAggregationInputObjectSchema,
    DiveBuddyInDiveOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiveBuddyInDiveScalarFieldEnumSchema),
});
