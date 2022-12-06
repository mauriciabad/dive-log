import { z } from "zod";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { NestedEnumWaterEntryNullableWithAggregatesFilterObjectSchema } from "./NestedEnumWaterEntryNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterEntryNullableFilterObjectSchema } from "./NestedEnumWaterEntryNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterEntryNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => WaterEntrySchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterEntrySchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterEntrySchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterEntrySchema),
        z.lazy(
          () => NestedEnumWaterEntryNullableWithAggregatesFilterObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumWaterEntryNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumWaterEntryNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumWaterEntryNullableWithAggregatesFilterObjectSchema = Schema;
