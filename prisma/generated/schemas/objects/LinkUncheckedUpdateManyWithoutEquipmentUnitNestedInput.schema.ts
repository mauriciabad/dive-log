import { z } from "zod";
import { LinkCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedCreateWithoutEquipmentUnitInput.schema";
import { LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateOrConnectWithoutEquipmentUnitInput.schema";
import { LinkUpsertWithWhereUniqueWithoutEquipmentUnitInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutEquipmentUnitInput.schema";
import { LinkCreateManyEquipmentUnitInputEnvelopeObjectSchema } from "./LinkCreateManyEquipmentUnitInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutEquipmentUnitInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutEquipmentUnitInput.schema";
import { LinkUpdateManyWithWhereWithoutEquipmentUnitInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutEquipmentUnitInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutEquipmentUnitNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema),
          z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema).array(),
          z.lazy(
            () => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () => LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LinkUpsertWithWhereUniqueWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () =>
                LinkUpsertWithWhereUniqueWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyEquipmentUnitInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => LinkUpdateWithWhereUniqueWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () =>
                LinkUpdateWithWhereUniqueWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LinkUpdateManyWithWhereWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateManyWithWhereWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LinkScalarWhereInputObjectSchema),
          z.lazy(() => LinkScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkUncheckedUpdateManyWithoutEquipmentUnitNestedInputObjectSchema =
  Schema;
