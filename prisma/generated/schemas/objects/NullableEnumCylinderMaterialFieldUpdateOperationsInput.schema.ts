import { z } from "zod";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumCylinderMaterialFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => CylinderMaterialSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumCylinderMaterialFieldUpdateOperationsInputObjectSchema =
  Schema;
