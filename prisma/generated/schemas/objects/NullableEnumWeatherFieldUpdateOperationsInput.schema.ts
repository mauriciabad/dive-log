import { z } from "zod";
import { WeatherSchema } from "../enums/Weather.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWeatherFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WeatherSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWeatherFieldUpdateOperationsInputObjectSchema = Schema;
