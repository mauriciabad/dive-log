import { z } from "zod";
import { LinkWhereInputObjectSchema } from "./objects/LinkWhereInput.schema";
import { LinkOrderByWithRelationInputObjectSchema } from "./objects/LinkOrderByWithRelationInput.schema";
import { LinkWhereUniqueInputObjectSchema } from "./objects/LinkWhereUniqueInput.schema";
import { LinkCountAggregateInputObjectSchema } from "./objects/LinkCountAggregateInput.schema";
import { LinkMinAggregateInputObjectSchema } from "./objects/LinkMinAggregateInput.schema";
import { LinkMaxAggregateInputObjectSchema } from "./objects/LinkMaxAggregateInput.schema";

export const LinkAggregateSchema = z.object({
  where: LinkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LinkOrderByWithRelationInputObjectSchema,
      LinkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: LinkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), LinkCountAggregateInputObjectSchema])
    .optional(),
  _min: LinkMinAggregateInputObjectSchema.optional(),
  _max: LinkMaxAggregateInputObjectSchema.optional(),
});
