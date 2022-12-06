import { z } from "zod";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { NestedEnumWaterEntryNullableFilterObjectSchema } from "./NestedEnumWaterEntryNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWaterEntryNullableFilter> = z
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
        z.lazy(() => NestedEnumWaterEntryNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const EnumWaterEntryNullableFilterObjectSchema = Schema;
