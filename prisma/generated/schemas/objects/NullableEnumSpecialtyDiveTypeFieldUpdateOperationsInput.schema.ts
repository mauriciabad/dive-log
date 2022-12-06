import { z } from "zod";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumSpecialtyDiveTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => SpecialtyDiveTypeSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumSpecialtyDiveTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
