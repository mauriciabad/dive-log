import { z } from "zod";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCylinderMaterialNullableFilter> = z
  .object({
    equals: z
      .lazy(() => CylinderMaterialSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => CylinderMaterialSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => CylinderMaterialSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => CylinderMaterialSchema),
        z.lazy(() => NestedEnumCylinderMaterialNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumCylinderMaterialNullableFilterObjectSchema = Schema;
