import { z } from "zod";
import { DiveSiteWhereInputObjectSchema } from "./objects/DiveSiteWhereInput.schema";
import { DiveSiteOrderByWithAggregationInputObjectSchema } from "./objects/DiveSiteOrderByWithAggregationInput.schema";
import { DiveSiteScalarWhereWithAggregatesInputObjectSchema } from "./objects/DiveSiteScalarWhereWithAggregatesInput.schema";
import { DiveSiteScalarFieldEnumSchema } from "./enums/DiveSiteScalarFieldEnum.schema";

export const DiveSiteGroupBySchema = z.object({
  where: DiveSiteWhereInputObjectSchema.optional(),
  orderBy: z.union([
    DiveSiteOrderByWithAggregationInputObjectSchema,
    DiveSiteOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: DiveSiteScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiveSiteScalarFieldEnumSchema),
});
