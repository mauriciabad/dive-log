import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateManyUserInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    owned: z.boolean().optional(),
    image: z.string().optional().nullable(),
    manufacturer: z.string().optional().nullable(),
    retailer: z.string().optional().nullable(),
    purchaseDate: z.date().optional().nullable(),
    serialNumber: z.string().optional().nullable(),
    note: z.string().optional().nullable(),
    size: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
  })
  .strict();

export const EquipmentUnitCreateManyUserInputObjectSchema = Schema;
