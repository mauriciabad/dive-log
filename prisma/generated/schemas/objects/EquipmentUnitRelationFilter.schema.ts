import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./EquipmentUnitWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitRelationFilter> = z
  .object({
    is: z
      .lazy(() => EquipmentUnitWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EquipmentUnitWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EquipmentUnitRelationFilterObjectSchema = Schema;
