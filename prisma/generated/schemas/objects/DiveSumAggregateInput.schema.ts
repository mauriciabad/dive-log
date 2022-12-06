import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSumAggregateInputType> = z
  .object({
    diveNumber: z.literal(true).optional(),
    duration: z.literal(true).optional(),
    maximumDepth: z.literal(true).optional(),
    averageDepth: z.literal(true).optional(),
    waterMinimumTemperature: z.literal(true).optional(),
    waterAverageTemperature: z.literal(true).optional(),
    waterMaximumTemperature: z.literal(true).optional(),
    airTemperature: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    startCylinderPresure: z.literal(true).optional(),
    endCylinderPresure: z.literal(true).optional(),
    cylinderVolume: z.literal(true).optional(),
    rating: z.literal(true).optional(),
  })
  .strict();

export const DiveSumAggregateInputObjectSchema = Schema;
