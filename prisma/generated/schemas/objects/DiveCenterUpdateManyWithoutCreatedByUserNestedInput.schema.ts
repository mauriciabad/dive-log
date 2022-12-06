import { z } from "zod";
import { DiveCenterCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutCreatedByUserInput.schema";
import { DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutCreatedByUserInput.schema";
import { DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInput.schema";
import { DiveCenterCreateManyCreatedByUserInputEnvelopeObjectSchema } from "./DiveCenterCreateManyCreatedByUserInputEnvelope.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInput.schema";
import { DiveCenterUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUpdateManyWithWhereWithoutCreatedByUserInput.schema";
import { DiveCenterScalarWhereInputObjectSchema } from "./DiveCenterScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateManyWithoutCreatedByUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema),
          z
            .lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveCenterCreateManyCreatedByUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiveCenterUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiveCenterScalarWhereInputObjectSchema),
          z.lazy(() => DiveCenterScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveCenterUpdateManyWithoutCreatedByUserNestedInputObjectSchema =
  Schema;
