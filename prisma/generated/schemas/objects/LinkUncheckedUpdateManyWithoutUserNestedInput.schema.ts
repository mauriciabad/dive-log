import { z } from "zod";
import { LinkCreateWithoutUserInputObjectSchema } from "./LinkCreateWithoutUserInput.schema";
import { LinkUncheckedCreateWithoutUserInputObjectSchema } from "./LinkUncheckedCreateWithoutUserInput.schema";
import { LinkCreateOrConnectWithoutUserInputObjectSchema } from "./LinkCreateOrConnectWithoutUserInput.schema";
import { LinkUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutUserInput.schema";
import { LinkCreateManyUserInputEnvelopeObjectSchema } from "./LinkCreateManyUserInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutUserInput.schema";
import { LinkUpdateManyWithWhereWithoutUserInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutUserInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutUserInputObjectSchema),
          z.lazy(() => LinkCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => LinkUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => LinkCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LinkUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => LinkUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyUserInputEnvelopeObjectSchema)
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
          z.lazy(() => LinkUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => LinkUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LinkUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => LinkUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const LinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
