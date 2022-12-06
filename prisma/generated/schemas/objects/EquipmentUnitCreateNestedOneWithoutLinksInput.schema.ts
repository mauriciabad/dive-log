import { z } from "zod";
import { EquipmentUnitCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateWithoutLinksInput.schema";
import { EquipmentUnitUncheckedCreateWithoutLinksInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutLinksInput.schema";
import { EquipmentUnitCreateOrConnectWithoutLinksInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutLinksInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateNestedOneWithoutLinksInput> =
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
      connect: z
        .lazy(() => EquipmentUnitWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const EquipmentUnitCreateNestedOneWithoutLinksInputObjectSchema = Schema;
