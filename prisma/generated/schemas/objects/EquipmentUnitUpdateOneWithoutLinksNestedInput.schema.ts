import { z } from "zod";
import { EquipmentUnitCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutLinksInput.schema";
import { EquipmentUnitCreateOrConnectWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutLinksInput.schema";
import { EquipmentUnitUpsertWithoutLinksInputObjectSchema } from "./EquipmentUnitUpsertWithoutLinksInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithoutLinksInputObjectSchema } from "./EquipmentUnitUpdateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedUpdateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateOneWithoutLinksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EquipmentUnitCreateWithoutLinksInputObjectSchema),
          z.lazy(
            () => EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => EquipmentUnitCreateOrConnectWithoutLinksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => EquipmentUnitUpsertWithoutLinksInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => EquipmentUnitWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => EquipmentUnitUpdateWithoutLinksInputObjectSchema),
          z.lazy(
            () => EquipmentUnitUncheckedUpdateWithoutLinksInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const EquipmentUnitUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
