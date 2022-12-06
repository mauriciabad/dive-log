import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutEquipmentUnitInputObjectSchema } from "./LinkUpdateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedUpdateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedUpdateWithoutEquipmentUnitInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutEquipmentUnitInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateWithoutEquipmentUnitInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutEquipmentUnitInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateWithWhereUniqueWithoutEquipmentUnitInputObjectSchema =
  Schema;
