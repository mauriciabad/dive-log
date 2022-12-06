import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./objects/DiveCenterWhereInput.schema";
import { DiveCenterOrderByWithRelationInputObjectSchema } from "./objects/DiveCenterOrderByWithRelationInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";
import { DiveCenterCountAggregateInputObjectSchema } from "./objects/DiveCenterCountAggregateInput.schema";
import { DiveCenterMinAggregateInputObjectSchema } from "./objects/DiveCenterMinAggregateInput.schema";
import { DiveCenterMaxAggregateInputObjectSchema } from "./objects/DiveCenterMaxAggregateInput.schema";
import { DiveCenterAvgAggregateInputObjectSchema } from "./objects/DiveCenterAvgAggregateInput.schema";
import { DiveCenterSumAggregateInputObjectSchema } from "./objects/DiveCenterSumAggregateInput.schema";

export const DiveCenterAggregateSchema = z.object({
  where: DiveCenterWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveCenterOrderByWithRelationInputObjectSchema,
      DiveCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiveCenterCountAggregateInputObjectSchema])
    .optional(),
  _min: DiveCenterMinAggregateInputObjectSchema.optional(),
  _max: DiveCenterMaxAggregateInputObjectSchema.optional(),
  _avg: DiveCenterAvgAggregateInputObjectSchema.optional(),
  _sum: DiveCenterSumAggregateInputObjectSchema.optional(),
});
