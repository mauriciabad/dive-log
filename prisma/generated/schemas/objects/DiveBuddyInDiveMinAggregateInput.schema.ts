import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveMinAggregateInputType> = z
  .object({
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    diveId: z.literal(true).optional(),
    diveBuddyId: z.literal(true).optional(),
    notes: z.literal(true).optional(),
    role: z.literal(true).optional(),
  })
  .strict();

export const DiveBuddyInDiveMinAggregateInputObjectSchema = Schema;
