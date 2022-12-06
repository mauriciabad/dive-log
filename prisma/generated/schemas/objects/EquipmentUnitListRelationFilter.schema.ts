import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./EquipmentUnitWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitListRelationFilter> = z
  .object({
    every: z.lazy(() => EquipmentUnitWhereInputObjectSchema).optional(),
    some: z.lazy(() => EquipmentUnitWhereInputObjectSchema).optional(),
    none: z.lazy(() => EquipmentUnitWhereInputObjectSchema).optional(),
  })
  .strict();

export const EquipmentUnitListRelationFilterObjectSchema = Schema;
