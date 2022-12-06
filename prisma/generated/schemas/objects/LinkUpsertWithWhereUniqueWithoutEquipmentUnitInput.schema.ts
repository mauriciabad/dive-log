import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutEquipmentUnitInputObjectSchema } from "./LinkUpdateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedUpdateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedUpdateWithoutEquipmentUnitInput.schema";
import { LinkCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedCreateWithoutEquipmentUnitInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutEquipmentUnitInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LinkUpdateWithoutEquipmentUnitInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutEquipmentUnitInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpsertWithWhereUniqueWithoutEquipmentUnitInputObjectSchema =
  Schema;
