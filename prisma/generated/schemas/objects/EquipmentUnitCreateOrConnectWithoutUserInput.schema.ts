import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitCreateWithoutUserInputObjectSchema } from "./EquipmentUnitCreateWithoutUserInput.schema";
import { EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EquipmentUnitCreateWithoutUserInputObjectSchema),
      z.lazy(() => EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const EquipmentUnitCreateOrConnectWithoutUserInputObjectSchema = Schema;
