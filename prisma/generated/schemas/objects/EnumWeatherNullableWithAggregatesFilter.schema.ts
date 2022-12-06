import { z } from "zod";
import { WeatherSchema } from "../enums/Weather.schema";
import { NestedEnumWeatherNullableWithAggregatesFilterObjectSchema } from "./NestedEnumWeatherNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumWeatherNullableFilterObjectSchema } from "./NestedEnumWeatherNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumWeatherNullableWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumWeatherNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumWeatherNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumWeatherNullableFilterObjectSchema).optional(),
  })
  .strict();

export const EnumWeatherNullableWithAggregatesFilterObjectSchema = Schema;
