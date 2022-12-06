import { z } from "zod";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { NestedEnumWaterCurrentNullableWithAggregatesFilterObjectSchema } from "./NestedEnumWaterCurrentNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWaterCurrentNullableFilterObjectSchema } from "./NestedEnumWaterCurrentNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterCurrentNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => WaterCurrentSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WaterCurrentSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WaterCurrentSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WaterCurrentSchema),
        z.lazy(
          () => NestedEnumWaterCurrentNullableWithAggregatesFilterObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumWaterCurrentNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumWaterCurrentNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumWaterCurrentNullableWithAggregatesFilterObjectSchema = Schema;
