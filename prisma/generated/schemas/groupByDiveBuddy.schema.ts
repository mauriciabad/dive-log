import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./objects/DiveBuddyWhereInput.schema";
import { DiveBuddyOrderByWithAggregationInputObjectSchema } from "./objects/DiveBuddyOrderByWithAggregationInput.schema";
import { DiveBuddyScalarWhereWithAggregatesInputObjectSchema } from "./objects/DiveBuddyScalarWhereWithAggregatesInput.schema";
import { DiveBuddyScalarFieldEnumSchema } from "./enums/DiveBuddyScalarFieldEnum.schema";

export const DiveBuddyGroupBySchema = z.object({
  where: DiveBuddyWhereInputObjectSchema.optional(),
  orderBy: z.union([
    DiveBuddyOrderByWithAggregationInputObjectSchema,
    DiveBuddyOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: DiveBuddyScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiveBuddyScalarFieldEnumSchema),
});
