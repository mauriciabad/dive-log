import { z } from "zod";
import { DiveTypeSchema } from "../enums/DiveType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumDiveTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => DiveTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumDiveTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
