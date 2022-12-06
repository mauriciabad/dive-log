import { z } from "zod";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterVisibilityFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterVisibilitySchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterVisibilityFieldUpdateOperationsInputObjectSchema =
  Schema;
