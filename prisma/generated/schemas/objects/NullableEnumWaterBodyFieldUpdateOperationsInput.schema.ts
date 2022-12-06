import { z } from "zod";
import { WaterBodySchema } from "../enums/WaterBody.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterBodyFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterBodySchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterBodyFieldUpdateOperationsInputObjectSchema =
  Schema;
