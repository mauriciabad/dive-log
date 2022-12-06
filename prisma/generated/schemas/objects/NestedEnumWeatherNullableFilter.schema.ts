import { z } from "zod";
import { WeatherSchema } from "../enums/Weather.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumWeatherNullableFilter> = z
  .object({
    equals: z
      .lazy(() => WeatherSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => WeatherSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => WeatherSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => WeatherSchema),
        z.lazy(() => NestedEnumWeatherNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumWeatherNullableFilterObjectSchema = Schema;
