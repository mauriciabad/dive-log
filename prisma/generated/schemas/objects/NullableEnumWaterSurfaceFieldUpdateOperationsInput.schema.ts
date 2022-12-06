import { z } from "zod";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterSurfaceFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterSurfaceSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterSurfaceFieldUpdateOperationsInputObjectSchema =
  Schema;
