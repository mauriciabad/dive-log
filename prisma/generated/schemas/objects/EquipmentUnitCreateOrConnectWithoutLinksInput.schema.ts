import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateOrConnectWithoutLinksInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EquipmentUnitCreateWithoutLinksInputObjectSchema),
        z.lazy(() => EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema),
      ]),
    })
    .strict();

export const EquipmentUnitCreateOrConnectWithoutLinksInputObjectSchema = Schema;
