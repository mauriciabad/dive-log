import { z } from "zod";
import { LinkCreateWithoutCreatorUserInputObjectSchema } from "./LinkCreateWithoutCreatorUserInput.schema";
import { LinkUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedCreateWithoutCreatorUserInput.schema";
import { LinkCreateOrConnectWithoutCreatorUserInputObjectSchema } from "./LinkCreateOrConnectWithoutCreatorUserInput.schema";
import { LinkCreateManyCreatorUserInputEnvelopeObjectSchema } from "./LinkCreateManyCreatorUserInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutCreatorUserInput> =
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
      createMany: z
        .lazy(() => LinkCreateManyCreatorUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkUncheckedCreateNestedManyWithoutCreatorUserInputObjectSchema =
  Schema;
