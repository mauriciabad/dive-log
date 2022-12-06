import { z } from "zod";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";
import { NestedEnumUnitSystemNullableWithAggregatesFilterObjectSchema } from "./NestedEnumUnitSystemNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumUnitSystemNullableFilterObjectSchema } from "./NestedEnumUnitSystemNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumUnitSystemNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => UnitSystemSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => UnitSystemSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => UnitSystemSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => UnitSystemSchema),
        z.lazy(
          () => NestedEnumUnitSystemNullableWithAggregatesFilterObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumUnitSystemNullableFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumUnitSystemNullableFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumUnitSystemNullableWithAggregatesFilterObjectSchema = Schema;
