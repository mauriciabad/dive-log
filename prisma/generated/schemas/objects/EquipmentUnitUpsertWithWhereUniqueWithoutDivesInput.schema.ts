import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithoutDivesInputObjectSchema } from "./EquipmentUnitUpdateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutDivesInput.schema";
import { EquipmentUnitCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpsertWithWhereUniqueWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EquipmentUnitUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedUpdateWithoutDivesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EquipmentUnitCreateWithoutDivesInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitUpsertWithWhereUniqueWithoutDivesInputObjectSchema =
  Schema;
