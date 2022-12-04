import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string().optional().nullable(),
    date: z.date(),
    maxDepth: z.number(),
    waterTemp: z.number(),
    locationName: z.string(),
  })
  .strict();

export const DiveUncheckedCreateInputObjectSchema = Schema;
