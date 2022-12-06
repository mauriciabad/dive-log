import { z } from "zod";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterVisibilityNullableFilterObjectSchema } from "./NestedEnumWaterVisibilityNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWaterVisibilityNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => WaterVisibilitySchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => WaterVisibilitySchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => WaterVisibilitySchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => WaterVisibilitySchema),
          z.lazy(
            () =>
              NestedEnumWaterVisibilityNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumWaterVisibilityNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumWaterVisibilityNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumWaterVisibilityNullableWithAggregatesFilterObjectSchema =
  Schema;
