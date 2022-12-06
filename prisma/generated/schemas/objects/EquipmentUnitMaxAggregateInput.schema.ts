import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitMaxAggregateInputType> = z
  .object({
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    owned: z.literal(true).optional(),
    image: z.literal(true).optional(),
    manufacturer: z.literal(true).optional(),
    retailer: z.literal(true).optional(),
    purchaseDate: z.literal(true).optional(),
    serialNumber: z.literal(true).optional(),
    note: z.literal(true).optional(),
    size: z.literal(true).optional(),
    color: z.literal(true).optional(),
  })
  .strict();

export const EquipmentUnitMaxAggregateInputObjectSchema = Schema;
