import { z } from "zod";
import { SessionWhereInputObjectSchema } from "./objects/SessionWhereInput.schema";
import { SessionOrderByWithRelationInputObjectSchema } from "./objects/SessionOrderByWithRelationInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";
import { SessionCountAggregateInputObjectSchema } from "./objects/SessionCountAggregateInput.schema";
import { SessionMinAggregateInputObjectSchema } from "./objects/SessionMinAggregateInput.schema";
import { SessionMaxAggregateInputObjectSchema } from "./objects/SessionMaxAggregateInput.schema";

export const SessionAggregateSchema = z.object({
  where: SessionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SessionOrderByWithRelationInputObjectSchema,
      SessionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), SessionCountAggregateInputObjectSchema])
    .optional(),
  _min: SessionMinAggregateInputObjectSchema.optional(),
  _max: SessionMaxAggregateInputObjectSchema.optional(),
});
