import { z } from "zod";
import { LinkUncheckedCreateNestedManyWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutEquipmentUnitInput.schema";
import { DiveUncheckedCreateNestedManyWithoutEquipmentInputObjectSchema } from "./DiveUncheckedCreateNestedManyWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUncheckedCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    userId: z.string(),
    name: z.string(),
    owned: z.boolean().optional(),
    image: z.string().optional().nullable(),
    manufacturer: z.string().optional().nullable(),
    retailer: z.string().optional().nullable(),
    purchaseDate: z.date().optional().nullable(),
    serialNumber: z.string().optional().nullable(),
    links: z
      .lazy(
        () => LinkUncheckedCreateNestedManyWithoutEquipmentUnitInputObjectSchema
      )
      .optional(),
    note: z.string().optional().nullable(),
    size: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
    dives: z
      .lazy(
        () => DiveUncheckedCreateNestedManyWithoutEquipmentInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const EquipmentUnitUncheckedCreateInputObjectSchema = Schema;
