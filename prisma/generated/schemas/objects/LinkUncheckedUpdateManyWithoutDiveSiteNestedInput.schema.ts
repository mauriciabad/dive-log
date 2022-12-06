import { z } from "zod";
import { LinkCreateWithoutDiveSiteInputObjectSchema } from "./LinkCreateWithoutDiveSiteInput.schema";
import { LinkUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveSiteInput.schema";
import { LinkCreateOrConnectWithoutDiveSiteInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveSiteInput.schema";
import { LinkUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutDiveSiteInput.schema";
import { LinkCreateManyDiveSiteInputEnvelopeObjectSchema } from "./LinkCreateManyDiveSiteInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutDiveSiteInput.schema";
import { LinkUpdateManyWithWhereWithoutDiveSiteInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutDiveSiteInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutDiveSiteNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema),
          z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema),
          z
            .lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutDiveSiteInputObjectSchema),
          z
            .lazy(() => LinkCreateOrConnectWithoutDiveSiteInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => LinkUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyDiveSiteInputEnvelopeObjectSchema)
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
            () => LinkUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LinkUpdateManyWithWhereWithoutDiveSiteInputObjectSchema),
          z
            .lazy(() => LinkUpdateManyWithWhereWithoutDiveSiteInputObjectSchema)
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

export const LinkUncheckedUpdateManyWithoutDiveSiteNestedInputObjectSchema =
  Schema;
