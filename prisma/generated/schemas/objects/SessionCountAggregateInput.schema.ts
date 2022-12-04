import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sessionToken: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    expires: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const SessionCountAggregateInputObjectSchema = Schema;
