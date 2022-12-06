import { z } from "zod";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumDiveTypeNullableFilterObjectSchema } from "./NestedEnumDiveTypeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumDiveTypeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => DiveTypeSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => DiveTypeSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => DiveTypeSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => DiveTypeSchema),
          z.lazy(
            () => NestedEnumDiveTypeNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumDiveTypeNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumDiveTypeNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumDiveTypeNullableWithAggregatesFilterObjectSchema =
  Schema;
