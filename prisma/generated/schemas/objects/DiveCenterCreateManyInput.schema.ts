import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateManyInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    createdByUserId: z.string(),
  })
  .strict();

export const DiveCenterCreateManyInputObjectSchema = Schema;
