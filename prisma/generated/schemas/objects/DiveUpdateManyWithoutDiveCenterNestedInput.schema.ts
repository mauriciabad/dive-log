import { z } from "zod";
import { DiveCreateWithoutDiveCenterInputObjectSchema } from "./DiveCreateWithoutDiveCenterInput.schema";
import { DiveUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveCenterInput.schema";
import { DiveCreateOrConnectWithoutDiveCenterInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveCenterInput.schema";
import { DiveUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema } from "./DiveUpsertWithWhereUniqueWithoutDiveCenterInput.schema";
import { DiveCreateManyDiveCenterInputEnvelopeObjectSchema } from "./DiveCreateManyDiveCenterInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema } from "./DiveUpdateWithWhereUniqueWithoutDiveCenterInput.schema";
import { DiveUpdateManyWithWhereWithoutDiveCenterInputObjectSchema } from "./DiveUpdateManyWithWhereWithoutDiveCenterInput.schema";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyWithoutDiveCenterNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema).array(),
        z.lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema),
        z
          .lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiveCreateOrConnectWithoutDiveCenterInputObjectSchema),
        z
          .lazy(() => DiveCreateOrConnectWithoutDiveCenterInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => DiveUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema
        ),
        z
          .lazy(
            () => DiveUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DiveCreateManyDiveCenterInputEnvelopeObjectSchema)
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
          () => DiveUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema
        ),
        z
          .lazy(
            () => DiveUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DiveUpdateManyWithWhereWithoutDiveCenterInputObjectSchema),
        z
          .lazy(() => DiveUpdateManyWithWhereWithoutDiveCenterInputObjectSchema)
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

export const DiveUpdateManyWithoutDiveCenterNestedInputObjectSchema = Schema;
