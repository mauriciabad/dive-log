import { z } from "zod";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterTypeNullableFilterObjectSchema } from "./NestedEnumWaterTypeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWaterTypeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => WaterTypeSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => WaterTypeSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => WaterTypeSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => WaterTypeSchema),
          z.lazy(
            () => NestedEnumWaterTypeNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumWaterTypeNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumWaterTypeNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumWaterTypeNullableWithAggregatesFilterObjectSchema =
  Schema;
