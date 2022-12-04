import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveAvgAggregateInputType> = z
  .object({
    maxDepth: z.literal(true).optional(),
    waterTemp: z.literal(true).optional(),
  })
  .strict();

export const DiveAvgAggregateInputObjectSchema = Schema;
