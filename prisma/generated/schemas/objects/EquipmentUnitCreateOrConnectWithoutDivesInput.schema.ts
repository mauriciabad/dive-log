import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateOrConnectWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EquipmentUnitCreateWithoutDivesInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitCreateOrConnectWithoutDivesInputObjectSchema = Schema;
