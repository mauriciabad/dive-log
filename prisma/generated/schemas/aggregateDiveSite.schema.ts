import { z } from "zod";
import { DiveSiteWhereInputObjectSchema } from "./objects/DiveSiteWhereInput.schema";
import { DiveSiteOrderByWithRelationInputObjectSchema } from "./objects/DiveSiteOrderByWithRelationInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";
import { DiveSiteCountAggregateInputObjectSchema } from "./objects/DiveSiteCountAggregateInput.schema";
import { DiveSiteMinAggregateInputObjectSchema } from "./objects/DiveSiteMinAggregateInput.schema";
import { DiveSiteMaxAggregateInputObjectSchema } from "./objects/DiveSiteMaxAggregateInput.schema";
import { DiveSiteAvgAggregateInputObjectSchema } from "./objects/DiveSiteAvgAggregateInput.schema";
import { DiveSiteSumAggregateInputObjectSchema } from "./objects/DiveSiteSumAggregateInput.schema";

export const DiveSiteAggregateSchema = z.object({
  where: DiveSiteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveSiteOrderByWithRelationInputObjectSchema,
      DiveSiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveSiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiveSiteCountAggregateInputObjectSchema])
    .optional(),
  _min: DiveSiteMinAggregateInputObjectSchema.optional(),
  _max: DiveSiteMaxAggregateInputObjectSchema.optional(),
  _avg: DiveSiteAvgAggregateInputObjectSchema.optional(),
  _sum: DiveSiteSumAggregateInputObjectSchema.optional(),
});
