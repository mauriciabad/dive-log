import { z } from "zod";
import { EquipmentUnitCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateWithoutDivesInput.schema";
import { EquipmentUnitUncheckedCreateWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedCreateWithoutDivesInput.schema";
import { EquipmentUnitCreateOrConnectWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateOrConnectWithoutDivesInput.schema";
import { EquipmentUnitUpsertWithWhereUniqueWithoutDivesInputObjectSchema } from "./EquipmentUnitUpsertWithWhereUniqueWithoutDivesInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitUpdateWithWhereUniqueWithoutDivesInputObjectSchema } from "./EquipmentUnitUpdateWithWhereUniqueWithoutDivesInput.schema";
import { EquipmentUnitUpdateManyWithWhereWithoutDivesInputObjectSchema } from "./EquipmentUnitUpdateManyWithWhereWithoutDivesInput.schema";
import { EquipmentUnitScalarWhereInputObjectSchema } from "./EquipmentUnitScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateManyWithoutDivesNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              EquipmentUnitUpsertWithWhereUniqueWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EquipmentUnitUpsertWithWhereUniqueWithoutDivesInputObjectSchema
            )
            .array(),
        ])
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
            () =>
              EquipmentUnitUpdateWithWhereUniqueWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EquipmentUnitUpdateWithWhereUniqueWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => EquipmentUnitUpdateManyWithWhereWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                EquipmentUnitUpdateManyWithWhereWithoutDivesInputObjectSchema
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

export const EquipmentUnitUpdateManyWithoutDivesNestedInputObjectSchema =
  Schema;
