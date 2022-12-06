import { z } from "zod";
import { WaterBodySchema } from "../enums/WaterBody.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWaterBodyNullableFilter> = z
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
        z.lazy(() => NestedEnumWaterBodyNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumWaterBodyNullableFilterObjectSchema = Schema;
