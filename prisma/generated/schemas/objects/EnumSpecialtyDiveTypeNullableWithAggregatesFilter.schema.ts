import { z } from "zod";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { NestedEnumSpecialtyDiveTypeNullableWithAggregatesFilterObjectSchema } from "./NestedEnumSpecialtyDiveTypeNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumSpecialtyDiveTypeNullableFilterObjectSchema } from "./NestedEnumSpecialtyDiveTypeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSpecialtyDiveTypeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z
        .lazy(() => SpecialtyDiveTypeSchema)
        .optional()
        .nullable(),
      in: z
        .lazy(() => SpecialtyDiveTypeSchema)
        .array()
        .optional()
        .nullable(),
      notIn: z
        .lazy(() => SpecialtyDiveTypeSchema)
        .array()
        .optional()
        .nullable(),
      not: z
        .union([
          z.lazy(() => SpecialtyDiveTypeSchema),
          z.lazy(
            () =>
              NestedEnumSpecialtyDiveTypeNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumSpecialtyDiveTypeNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumSpecialtyDiveTypeNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const EnumSpecialtyDiveTypeNullableWithAggregatesFilterObjectSchema =
  Schema;
