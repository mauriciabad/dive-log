import { z } from "zod";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumCylinderMaterialNullableFilterObjectSchema } from "./NestedEnumCylinderMaterialNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumCylinderMaterialNullableWithAggregatesFilter> =
  z
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
          z.lazy(
            () =>
              NestedEnumCylinderMaterialNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumCylinderMaterialNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumCylinderMaterialNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const NestedEnumCylinderMaterialNullableWithAggregatesFilterObjectSchema =
  Schema;
