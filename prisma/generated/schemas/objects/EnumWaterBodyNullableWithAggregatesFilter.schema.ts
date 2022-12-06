import { z } from "zod";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { NestedEnumWaterBodyNullableWithAggregatesFilterObjectSchema } from "./NestedEnumWaterBodyNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterBodyNullableFilterObjectSchema } from "./NestedEnumWaterBodyNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterBodyNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => WaterBodySchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterBodySchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterBodySchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterBodySchema),
        z.lazy(
          () => NestedEnumWaterBodyNullableWithAggregatesFilterObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumWaterBodyNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumWaterBodyNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumWaterBodyNullableWithAggregatesFilterObjectSchema = Schema;
