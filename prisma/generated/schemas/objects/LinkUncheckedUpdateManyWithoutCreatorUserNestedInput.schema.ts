import { z } from "zod";
import { LinkCreateWithoutCreatorUserInputObjectSchema } from "./LinkCreateWithoutCreatorUserInput.schema";
import { LinkUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedCreateWithoutCreatorUserInput.schema";
import { LinkCreateOrConnectWithoutCreatorUserInputObjectSchema } from "./LinkCreateOrConnectWithoutCreatorUserInput.schema";
import { LinkUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutCreatorUserInput.schema";
import { LinkCreateManyCreatorUserInputEnvelopeObjectSchema } from "./LinkCreateManyCreatorUserInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutCreatorUserInput.schema";
import { LinkUpdateManyWithWhereWithoutCreatorUserInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutCreatorUserInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutCreatorUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutCreatorUserInputObjectSchema),
          z.lazy(() => LinkCreateWithoutCreatorUserInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutCreatorUserInputObjectSchema),
          z
            .lazy(() => LinkUncheckedCreateWithoutCreatorUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutCreatorUserInputObjectSchema),
          z
            .lazy(() => LinkCreateOrConnectWithoutCreatorUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LinkUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyCreatorUserInputEnvelopeObjectSchema)
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
            () => LinkUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => LinkUpdateManyWithWhereWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateManyWithWhereWithoutCreatorUserInputObjectSchema
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

export const LinkUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema =
  Schema;
