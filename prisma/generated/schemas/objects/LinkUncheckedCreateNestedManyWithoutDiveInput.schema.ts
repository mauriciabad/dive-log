import { z } from "zod";
import { LinkCreateWithoutDiveInputObjectSchema } from "./LinkCreateWithoutDiveInput.schema";
import { LinkUncheckedCreateWithoutDiveInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveInput.schema";
import { LinkCreateOrConnectWithoutDiveInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveInput.schema";
import { LinkCreateManyDiveInputEnvelopeObjectSchema } from "./LinkCreateManyDiveInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutDiveInput> =
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
      createMany: z
        .lazy(() => LinkCreateManyDiveInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkUncheckedCreateNestedManyWithoutDiveInputObjectSchema = Schema;
