import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./objects/DiveCenterWhereInput.schema";
import { DiveCenterOrderByWithAggregationInputObjectSchema } from "./objects/DiveCenterOrderByWithAggregationInput.schema";
import { DiveCenterScalarWhereWithAggregatesInputObjectSchema } from "./objects/DiveCenterScalarWhereWithAggregatesInput.schema";
import { DiveCenterScalarFieldEnumSchema } from "./enums/DiveCenterScalarFieldEnum.schema";

export const DiveCenterGroupBySchema = z.object({
  where: DiveCenterWhereInputObjectSchema.optional(),
  orderBy: z.union([
    DiveCenterOrderByWithAggregationInputObjectSchema,
    DiveCenterOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: DiveCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiveCenterScalarFieldEnumSchema),
});
