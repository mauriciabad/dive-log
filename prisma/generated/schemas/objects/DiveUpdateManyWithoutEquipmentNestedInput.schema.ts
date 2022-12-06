import { z } from "zod";
import { DiveCreateWithoutEquipmentInputObjectSchema } from "./DiveCreateWithoutEquipmentInput.schema";
import { DiveUncheckedCreateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedCreateWithoutEquipmentInput.schema";
import { DiveCreateOrConnectWithoutEquipmentInputObjectSchema } from "./DiveCreateOrConnectWithoutEquipmentInput.schema";
import { DiveUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema } from "./DiveUpsertWithWhereUniqueWithoutEquipmentInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema } from "./DiveUpdateWithWhereUniqueWithoutEquipmentInput.schema";
import { DiveUpdateManyWithWhereWithoutEquipmentInputObjectSchema } from "./DiveUpdateManyWithWhereWithoutEquipmentInput.schema";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyWithoutEquipmentNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema),
        z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema).array(),
        z.lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema),
        z
          .lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiveCreateOrConnectWithoutEquipmentInputObjectSchema),
        z
          .lazy(() => DiveCreateOrConnectWithoutEquipmentInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => DiveUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema
        ),
        z
          .lazy(
            () => DiveUpsertWithWhereUniqueWithoutEquipmentInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => DiveWhereUniqueInputObjectSchema),
        z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => DiveWhereUniqueInputObjectSchema),
        z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => DiveWhereUniqueInputObjectSchema),
        z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => DiveWhereUniqueInputObjectSchema),
        z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => DiveUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema
        ),
        z
          .lazy(
            () => DiveUpdateWithWhereUniqueWithoutEquipmentInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DiveUpdateManyWithWhereWithoutEquipmentInputObjectSchema),
        z
          .lazy(() => DiveUpdateManyWithWhereWithoutEquipmentInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => DiveScalarWhereInputObjectSchema),
        z.lazy(() => DiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DiveUpdateManyWithoutEquipmentNestedInputObjectSchema = Schema;
