import { z } from "zod";
import { UserCreateNestedOneWithoutEquipmentInputObjectSchema } from "./UserCreateNestedOneWithoutEquipmentInput.schema";
import { LinkCreateNestedManyWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateNestedManyWithoutEquipmentUnitInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateWithoutDivesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutEquipmentInputObjectSchema),
    name: z.string(),
    owned: z.boolean().optional(),
    image: z.string().optional().nullable(),
    manufacturer: z.string().optional().nullable(),
    retailer: z.string().optional().nullable(),
    purchaseDate: z.date().optional().nullable(),
    serialNumber: z.string().optional().nullable(),
    links: z
      .lazy(() => LinkCreateNestedManyWithoutEquipmentUnitInputObjectSchema)
      .optional(),
    note: z.string().optional().nullable(),
    size: z.string().optional().nullable(),
    color: z.string().optional().nullable(),
  })
  .strict();

export const EquipmentUnitCreateWithoutDivesInputObjectSchema = Schema;
