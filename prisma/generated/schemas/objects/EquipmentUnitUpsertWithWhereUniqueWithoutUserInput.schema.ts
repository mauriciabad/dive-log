import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithoutUserInputObjectSchema } from "./EquipmentUnitUpdateWithoutUserInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutUserInput.schema";
import { EquipmentUnitCreateWithoutUserInputObjectSchema } from "./EquipmentUnitCreateWithoutUserInput.schema";
import { EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EquipmentUnitUpdateWithoutUserInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EquipmentUnitCreateWithoutUserInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
