import { z } from "zod";
import { DiveCreateWithoutUserInputObjectSchema } from "./DiveCreateWithoutUserInput.schema";
import { DiveUncheckedCreateWithoutUserInputObjectSchema } from "./DiveUncheckedCreateWithoutUserInput.schema";
import { DiveCreateOrConnectWithoutUserInputObjectSchema } from "./DiveCreateOrConnectWithoutUserInput.schema";
import { DiveUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./DiveUpsertWithWhereUniqueWithoutUserInput.schema";
import { DiveCreateManyUserInputEnvelopeObjectSchema } from "./DiveCreateManyUserInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./DiveUpdateWithWhereUniqueWithoutUserInput.schema";
import { DiveUpdateManyWithWhereWithoutUserInputObjectSchema } from "./DiveUpdateManyWithWhereWithoutUserInput.schema";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutUserInputObjectSchema),
        z.lazy(() => DiveCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiveCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => DiveCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DiveUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => DiveUpsertWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DiveCreateManyUserInputEnvelopeObjectSchema)
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
        z.lazy(() => DiveUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z
          .lazy(() => DiveUpdateWithWhereUniqueWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DiveUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => DiveUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const DiveUpdateManyWithoutUserNestedInputObjectSchema = Schema;
