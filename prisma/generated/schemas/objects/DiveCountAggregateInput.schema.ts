import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    date: z.literal(true).optional(),
    maxDepth: z.literal(true).optional(),
    waterTemp: z.literal(true).optional(),
    locationName: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DiveCountAggregateInputObjectSchema = Schema;
