import { z } from "zod";
import { LinkCreateWithoutDiveCenterInputObjectSchema } from "./LinkCreateWithoutDiveCenterInput.schema";
import { LinkUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveCenterInput.schema";
import { LinkCreateOrConnectWithoutDiveCenterInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveCenterInput.schema";
import { LinkUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutDiveCenterInput.schema";
import { LinkCreateManyDiveCenterInputEnvelopeObjectSchema } from "./LinkCreateManyDiveCenterInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutDiveCenterInput.schema";
import { LinkUpdateManyWithWhereWithoutDiveCenterInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutDiveCenterInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutDiveCenterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutDiveCenterInputObjectSchema),
          z.lazy(() => LinkCreateWithoutDiveCenterInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutDiveCenterInputObjectSchema),
          z
            .lazy(() => LinkUncheckedCreateWithoutDiveCenterInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutDiveCenterInputObjectSchema),
          z
            .lazy(() => LinkCreateOrConnectWithoutDiveCenterInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LinkUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyDiveCenterInputEnvelopeObjectSchema)
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
            () => LinkUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LinkUpdateManyWithWhereWithoutDiveCenterInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateManyWithWhereWithoutDiveCenterInputObjectSchema
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

export const LinkUncheckedUpdateManyWithoutDiveCenterNestedInputObjectSchema =
  Schema;
