import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutEquipmentInputObjectSchema } from "./DiveUpdateWithoutEquipmentInput.schema";
import { DiveUncheckedUpdateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedUpdateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateWithWhereUniqueWithoutEquipmentInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveUpdateWithoutEquipmentInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutEquipmentInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema =
  Schema;
