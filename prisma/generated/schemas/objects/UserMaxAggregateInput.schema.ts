import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    image: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
