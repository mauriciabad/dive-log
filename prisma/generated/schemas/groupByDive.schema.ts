import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./objects/DiveWhereInput.schema";
import { DiveOrderByWithAggregationInputObjectSchema } from "./objects/DiveOrderByWithAggregationInput.schema";
import { DiveScalarWhereWithAggregatesInputObjectSchema } from "./objects/DiveScalarWhereWithAggregatesInput.schema";
import { DiveScalarFieldEnumSchema } from "./enums/DiveScalarFieldEnum.schema";

export const DiveGroupBySchema = z.object({
  where: DiveWhereInputObjectSchema.optional(),
  orderBy: z.union([
    DiveOrderByWithAggregationInputObjectSchema,
    DiveOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: DiveScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiveScalarFieldEnumSchema),
});
