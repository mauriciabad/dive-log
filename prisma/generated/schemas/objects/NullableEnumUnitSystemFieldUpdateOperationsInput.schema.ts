import { z } from "zod";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumUnitSystemFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => UnitSystemSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumUnitSystemFieldUpdateOperationsInputObjectSchema =
  Schema;
