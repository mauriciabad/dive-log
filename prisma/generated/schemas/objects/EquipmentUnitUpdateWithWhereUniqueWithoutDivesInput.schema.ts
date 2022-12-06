import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithoutDivesInputObjectSchema } from "./EquipmentUnitUpdateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateWithWhereUniqueWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EquipmentUnitUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedUpdateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitUpdateWithWhereUniqueWithoutDivesInputObjectSchema =
  Schema;
