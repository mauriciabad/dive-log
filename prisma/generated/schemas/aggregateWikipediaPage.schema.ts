import { z } from "zod";
import { WikipediaPageWhereInputObjectSchema } from "./objects/WikipediaPageWhereInput.schema";
import { WikipediaPageOrderByWithRelationInputObjectSchema } from "./objects/WikipediaPageOrderByWithRelationInput.schema";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageCountAggregateInputObjectSchema } from "./objects/WikipediaPageCountAggregateInput.schema";
import { WikipediaPageMinAggregateInputObjectSchema } from "./objects/WikipediaPageMinAggregateInput.schema";
import { WikipediaPageMaxAggregateInputObjectSchema } from "./objects/WikipediaPageMaxAggregateInput.schema";
import { WikipediaPageAvgAggregateInputObjectSchema } from "./objects/WikipediaPageAvgAggregateInput.schema";
import { WikipediaPageSumAggregateInputObjectSchema } from "./objects/WikipediaPageSumAggregateInput.schema";

export const WikipediaPageAggregateSchema = z.object({
  where: WikipediaPageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WikipediaPageOrderByWithRelationInputObjectSchema,
      WikipediaPageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: WikipediaPageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), WikipediaPageCountAggregateInputObjectSchema])
    .optional(),
  _min: WikipediaPageMinAggregateInputObjectSchema.optional(),
  _max: WikipediaPageMaxAggregateInputObjectSchema.optional(),
  _avg: WikipediaPageAvgAggregateInputObjectSchema.optional(),
  _sum: WikipediaPageSumAggregateInputObjectSchema.optional(),
});
