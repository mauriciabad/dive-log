import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    diveNumber: z.lazy(() => SortOrderSchema).optional(),
    startDateTime: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    specialtyDiveType: z.lazy(() => SortOrderSchema).optional(),
    diveSiteId: z.lazy(() => SortOrderSchema).optional(),
    maximumDepth: z.lazy(() => SortOrderSchema).optional(),
    averageDepth: z.lazy(() => SortOrderSchema).optional(),
    waterMinimumTemperature: z.lazy(() => SortOrderSchema).optional(),
    waterAverageTemperature: z.lazy(() => SortOrderSchema).optional(),
    waterMaximumTemperature: z.lazy(() => SortOrderSchema).optional(),
    waterBody: z.lazy(() => SortOrderSchema).optional(),
    waterType: z.lazy(() => SortOrderSchema).optional(),
    waterEntry: z.lazy(() => SortOrderSchema).optional(),
    waterCurrent: z.lazy(() => SortOrderSchema).optional(),
    waterSurface: z.lazy(() => SortOrderSchema).optional(),
    waterVisibility: z.lazy(() => SortOrderSchema).optional(),
    weather: z.lazy(() => SortOrderSchema).optional(),
    airTemperature: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    startCylinderPresure: z.lazy(() => SortOrderSchema).optional(),
    endCylinderPresure: z.lazy(() => SortOrderSchema).optional(),
    cylinderMaterial: z.lazy(() => SortOrderSchema).optional(),
    cylinderVolume: z.lazy(() => SortOrderSchema).optional(),
    diveCenterId: z.lazy(() => SortOrderSchema).optional(),
    roleasDiveBuddy: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
    experienceNotes: z.lazy(() => SortOrderSchema).optional(),
    technicalNotes: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveCountOrderByAggregateInputObjectSchema = Schema;
