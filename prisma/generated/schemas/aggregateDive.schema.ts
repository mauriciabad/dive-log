import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./objects/DiveWhereInput.schema";
import { DiveOrderByWithRelationInputObjectSchema } from "./objects/DiveOrderByWithRelationInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./objects/DiveWhereUniqueInput.schema";
import { DiveCountAggregateInputObjectSchema } from "./objects/DiveCountAggregateInput.schema";
import { DiveMinAggregateInputObjectSchema } from "./objects/DiveMinAggregateInput.schema";
import { DiveMaxAggregateInputObjectSchema } from "./objects/DiveMaxAggregateInput.schema";
import { DiveAvgAggregateInputObjectSchema } from "./objects/DiveAvgAggregateInput.schema";
import { DiveSumAggregateInputObjectSchema } from "./objects/DiveSumAggregateInput.schema";

export const DiveAggregateSchema = z.object({
  where: DiveWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveOrderByWithRelationInputObjectSchema,
      DiveOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), DiveCountAggregateInputObjectSchema])
    .optional(),
  _min: DiveMinAggregateInputObjectSchema.optional(),
  _max: DiveMaxAggregateInputObjectSchema.optional(),
  _avg: DiveAvgAggregateInputObjectSchema.optional(),
  _sum: DiveSumAggregateInputObjectSchema.optional(),
});
