import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesMinAggregateInputType> = z
  .object({
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    id: z.literal(true).optional(),
    publicProfile: z.literal(true).optional(),
    lengthUnits: z.literal(true).optional(),
    weightUnits: z.literal(true).optional(),
    temperatureUnits: z.literal(true).optional(),
  })
  .strict();

export const UserPreferencesMinAggregateInputObjectSchema = Schema;
