import { z } from "zod";
import { EquipmentUnitCreateWithoutUserInputObjectSchema } from "./EquipmentUnitCreateWithoutUserInput.schema";
import { EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutUserInput.schema";
import { EquipmentUnitCreateOrConnectWithoutUserInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutUserInput.schema";
import { EquipmentUnitCreateManyUserInputEnvelopeObjectSchema } from "./EquipmentUnitCreateManyUserInputEnvelope.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EquipmentUnitCreateWithoutUserInputObjectSchema),
          z.lazy(() => EquipmentUnitCreateWithoutUserInputObjectSchema).array(),
          z.lazy(
            () => EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EquipmentUnitCreateOrConnectWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => EquipmentUnitCreateOrConnectWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EquipmentUnitCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EquipmentUnitUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
