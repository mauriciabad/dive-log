import { z } from "zod";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumWaterCurrentFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => WaterCurrentSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumWaterCurrentFieldUpdateOperationsInputObjectSchema =
  Schema;
