import { z } from "zod";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterEntryFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterEntrySchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterEntryFieldUpdateOperationsInputObjectSchema =
  Schema;
