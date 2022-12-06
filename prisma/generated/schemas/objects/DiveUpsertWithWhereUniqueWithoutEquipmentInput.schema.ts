import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutEquipmentInputObjectSchema } from "./DiveUpdateWithoutEquipmentInput.schema";
import { DiveUncheckedUpdateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedUpdateWithoutEquipmentInput.schema";
import { DiveCreateWithoutEquipmentInputObjectSchema } from "./DiveCreateWithoutEquipmentInput.schema";
import { DiveUncheckedCreateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedCreateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithWhereUniqueWithoutEquipmentInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveUpdateWithoutEquipmentInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutEquipmentInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema =
  Schema;
