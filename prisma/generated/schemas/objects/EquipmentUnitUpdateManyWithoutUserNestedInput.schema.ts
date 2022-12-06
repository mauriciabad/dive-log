import { z } from "zod";
import { EquipmentUnitCreateWithoutUserInputObjectSchema } from "./EquipmentUnitCreateWithoutUserInput.schema";
import { EquipmentUnitUncheckedCreateWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutUserInput.schema";
import { EquipmentUnitCreateOrConnectWithoutUserInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutUserInput.schema";
import { EquipmentUnitUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./EquipmentUnitUpsertWithWhereUniqueWithoutUserInput.schema";
import { EquipmentUnitCreateManyUserInputEnvelopeObjectSchema } from "./EquipmentUnitCreateManyUserInputEnvelope.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./EquipmentUnitUpdateWithWhereUniqueWithoutUserInput.schema";
import { EquipmentUnitUpdateManyWithWhereWithoutUserInputObjectSchema } from "./EquipmentUnitUpdateManyWithWhereWithoutUserInput.schema";
import { EquipmentUnitScalarWhereInputObjectSchema } from "./EquipmentUnitScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => EquipmentUnitUpsertWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EquipmentUnitUpsertWithWhereUniqueWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EquipmentUnitCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema),
          z.lazy(() => EquipmentUnitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => EquipmentUnitUpdateWithWhereUniqueWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EquipmentUnitUpdateWithWhereUniqueWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => EquipmentUnitUpdateManyWithWhereWithoutUserInputObjectSchema
          ),
          z
            .lazy(
              () => EquipmentUnitUpdateManyWithWhereWithoutUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => EquipmentUnitScalarWhereInputObjectSchema),
          z.lazy(() => EquipmentUnitScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EquipmentUnitUpdateManyWithoutUserNestedInputObjectSchema = Schema;
