import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCountAggregateInputType> = z
  .object({
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    id: z.literal(true).optional(),
    creatorUserId: z.literal(true).optional(),
    diveBuddyUserId: z.literal(true).optional(),
    customName: z.literal(true).optional(),
    customDescription: z.literal(true).optional(),
    customImage: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DiveBuddyCountAggregateInputObjectSchema = Schema;
