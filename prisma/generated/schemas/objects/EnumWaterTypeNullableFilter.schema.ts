import { z } from "zod";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { NestedEnumWaterTypeNullableFilterObjectSchema } from "./NestedEnumWaterTypeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterTypeNullableFilter> = z
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
        z.lazy(() => NestedEnumWaterTypeNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumWaterTypeNullableFilterObjectSchema = Schema;
