import { z } from "zod";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWaterSurfaceNullableFilter> = z
  .object({
    equals: z
      .lazy(() => WaterSurfaceSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterSurfaceSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterSurfaceSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterSurfaceSchema),
        z.lazy(() => NestedEnumWaterSurfaceNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumWaterSurfaceNullableFilterObjectSchema = Schema;
