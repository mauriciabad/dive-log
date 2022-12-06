import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    diveNumber: z.literal(true).optional(),
    startDateTime: z.literal(true).optional(),
    duration: z.literal(true).optional(),
    type: z.literal(true).optional(),
    specialtyDiveType: z.literal(true).optional(),
    diveSiteId: z.literal(true).optional(),
    maximumDepth: z.literal(true).optional(),
    averageDepth: z.literal(true).optional(),
    waterMinimumTemperature: z.literal(true).optional(),
    waterAverageTemperature: z.literal(true).optional(),
    waterMaximumTemperature: z.literal(true).optional(),
    waterBody: z.literal(true).optional(),
    waterType: z.literal(true).optional(),
    waterEntry: z.literal(true).optional(),
    waterCurrent: z.literal(true).optional(),
    waterSurface: z.literal(true).optional(),
    waterVisibility: z.literal(true).optional(),
    weather: z.literal(true).optional(),
    airTemperature: z.literal(true).optional(),
    weight: z.literal(true).optional(),
    startCylinderPresure: z.literal(true).optional(),
    endCylinderPresure: z.literal(true).optional(),
    cylinderMaterial: z.literal(true).optional(),
    cylinderVolume: z.literal(true).optional(),
    diveCenterId: z.literal(true).optional(),
    roleasDiveBuddy: z.literal(true).optional(),
    rating: z.literal(true).optional(),
    experienceNotes: z.literal(true).optional(),
    technicalNotes: z.literal(true).optional(),
  })
  .strict();

export const DiveMinAggregateInputObjectSchema = Schema;
