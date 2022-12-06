import { z } from "zod";
import { DiveTypeSchema } from "../enums/DiveType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumDiveTypeNullableFilter> = z
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
        z.lazy(() => NestedEnumDiveTypeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumDiveTypeNullableFilterObjectSchema = Schema;
