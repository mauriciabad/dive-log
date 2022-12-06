import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const EquipmentUnitWhereUniqueInputObjectSchema = Schema;
