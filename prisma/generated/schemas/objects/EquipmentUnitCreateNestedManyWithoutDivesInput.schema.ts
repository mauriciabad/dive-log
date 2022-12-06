import { z } from "zod";
import { EquipmentUnitCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutDivesInput.schema";
import { EquipmentUnitCreateOrConnectWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutDivesInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateNestedManyWithoutDivesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EquipmentUnitCreateWithoutDivesInputObjectSchema),
          z
            .lazy(() => EquipmentUnitCreateWithoutDivesInputObjectSchema)
            .array(),
          z.lazy(
            () => EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () => EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EquipmentUnitCreateOrConnectWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () => EquipmentUnitCreateOrConnectWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EquipmentUnitCreateNestedManyWithoutDivesInputObjectSchema =
  Schema;
