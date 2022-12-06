import { z } from "zod";
import { LinkCreateWithoutUserInputObjectSchema } from "./LinkCreateWithoutUserInput.schema";
import { LinkUncheckedCreateWithoutUserInputObjectSchema } from "./LinkUncheckedCreateWithoutUserInput.schema";
import { LinkCreateOrConnectWithoutUserInputObjectSchema } from "./LinkCreateOrConnectWithoutUserInput.schema";
import { LinkCreateManyUserInputEnvelopeObjectSchema } from "./LinkCreateManyUserInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => LinkCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LinkCreateNestedManyWithoutUserInputObjectSchema = Schema;
