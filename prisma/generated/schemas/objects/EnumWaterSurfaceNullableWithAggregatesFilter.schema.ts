import { z } from "zod";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { NestedEnumWaterSurfaceNullableWithAggregatesFilterObjectSchema } from "./NestedEnumWaterSurfaceNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterSurfaceNullableFilterObjectSchema } from "./NestedEnumWaterSurfaceNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterSurfaceNullableWithAggregatesFilter> = z
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
        z.lazy(
          () => NestedEnumWaterSurfaceNullableWithAggregatesFilterObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumWaterSurfaceNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumWaterSurfaceNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumWaterSurfaceNullableWithAggregatesFilterObjectSchema = Schema;
