import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveAvgOrderByAggregateInput> = z
  .object({
    diveNumber: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    maximumDepth: z.lazy(() => SortOrderSchema).optional(),
    averageDepth: z.lazy(() => SortOrderSchema).optional(),
    waterMinimumTemperature: z.lazy(() => SortOrderSchema).optional(),
    waterAverageTemperature: z.lazy(() => SortOrderSchema).optional(),
    waterMaximumTemperature: z.lazy(() => SortOrderSchema).optional(),
    airTemperature: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    startCylinderPresure: z.lazy(() => SortOrderSchema).optional(),
    endCylinderPresure: z.lazy(() => SortOrderSchema).optional(),
    cylinderVolume: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveAvgOrderByAggregateInputObjectSchema = Schema;
