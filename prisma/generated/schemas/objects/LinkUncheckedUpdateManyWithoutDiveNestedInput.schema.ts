import { z } from "zod";
import { LinkCreateWithoutDiveInputObjectSchema } from "./LinkCreateWithoutDiveInput.schema";
import { LinkUncheckedCreateWithoutDiveInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveInput.schema";
import { LinkCreateOrConnectWithoutDiveInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveInput.schema";
import { LinkUpsertWithWhereUniqueWithoutDiveInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutDiveInput.schema";
import { LinkCreateManyDiveInputEnvelopeObjectSchema } from "./LinkCreateManyDiveInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutDiveInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutDiveInput.schema";
import { LinkUpdateManyWithWhereWithoutDiveInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutDiveInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutDiveNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutDiveInputObjectSchema),
          z.lazy(() => LinkCreateWithoutDiveInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutDiveInputObjectSchema),
          z.lazy(() => LinkUncheckedCreateWithoutDiveInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutDiveInputObjectSchema),
          z.lazy(() => LinkCreateOrConnectWithoutDiveInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LinkUpsertWithWhereUniqueWithoutDiveInputObjectSchema),
          z
            .lazy(() => LinkUpsertWithWhereUniqueWithoutDiveInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyDiveInputEnvelopeObjectSchema)
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
          z.lazy(() => LinkUpdateWithWhereUniqueWithoutDiveInputObjectSchema),
          z
            .lazy(() => LinkUpdateWithWhereUniqueWithoutDiveInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LinkUpdateManyWithWhereWithoutDiveInputObjectSchema),
          z
            .lazy(() => LinkUpdateManyWithWhereWithoutDiveInputObjectSchema)
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

export const LinkUncheckedUpdateManyWithoutDiveNestedInputObjectSchema = Schema;
