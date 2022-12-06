import { z } from "zod";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumSpecialtyDiveTypeNullableFilter> = z
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
        z.lazy(() => NestedEnumSpecialtyDiveTypeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumSpecialtyDiveTypeNullableFilterObjectSchema = Schema;
