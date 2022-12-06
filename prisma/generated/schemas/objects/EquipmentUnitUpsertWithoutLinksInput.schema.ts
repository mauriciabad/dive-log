import { z } from "zod";
import { EquipmentUnitUpdateWithoutLinksInputObjectSchema } from "./EquipmentUnitUpdateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutLinksInput.schema";
import { EquipmentUnitCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => EquipmentUnitUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => EquipmentUnitUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EquipmentUnitCreateWithoutLinksInputObjectSchema),
      z.lazy(() => EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const EquipmentUnitUpsertWithoutLinksInputObjectSchema = Schema;
