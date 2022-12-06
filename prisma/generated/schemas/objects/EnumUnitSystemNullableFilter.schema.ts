import { z } from "zod";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";
import { NestedEnumUnitSystemNullableFilterObjectSchema } from "./NestedEnumUnitSystemNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumUnitSystemNullableFilter> = z
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
        z.lazy(() => NestedEnumUnitSystemNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumUnitSystemNullableFilterObjectSchema = Schema;
