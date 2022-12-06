import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithoutUserInputObjectSchema } from "./EquipmentUnitUpdateWithoutUserInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EquipmentUnitUpdateWithoutUserInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
