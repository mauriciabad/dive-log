import { z } from "zod";
import { LinkCreateWithoutDiveCenterInputObjectSchema } from "./LinkCreateWithoutDiveCenterInput.schema";
import { LinkUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveCenterInput.schema";
import { LinkCreateOrConnectWithoutDiveCenterInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveCenterInput.schema";
import { LinkCreateManyDiveCenterInputEnvelopeObjectSchema } from "./LinkCreateManyDiveCenterInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutDiveCenterInput> =
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
      createMany: z
        .lazy(() => LinkCreateManyDiveCenterInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema =
  Schema;
