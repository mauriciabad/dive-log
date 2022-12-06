import { z } from "zod";
import { WaterTypeSchema } from "../enums/WaterType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
