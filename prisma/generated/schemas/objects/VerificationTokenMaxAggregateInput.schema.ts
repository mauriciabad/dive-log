import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.VerificationTokenMaxAggregateInputType> = z
  .object({
    identifier: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expires: z.literal(true).optional(),
  })
  .strict();

export const VerificationTokenMaxAggregateInputObjectSchema = Schema;
