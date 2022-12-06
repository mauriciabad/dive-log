import { z } from "zod";
import { LinkCreateWithoutDiveBuddyInputObjectSchema } from "./LinkCreateWithoutDiveBuddyInput.schema";
import { LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveBuddyInput.schema";
import { LinkCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveBuddyInput.schema";
import { LinkCreateManyDiveBuddyInputEnvelopeObjectSchema } from "./LinkCreateManyDiveBuddyInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutDiveBuddyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutDiveBuddyInputObjectSchema),
          z.lazy(() => LinkCreateWithoutDiveBuddyInputObjectSchema).array(),
          z.lazy(() => LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema),
          z
            .lazy(() => LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LinkCreateOrConnectWithoutDiveBuddyInputObjectSchema),
          z
            .lazy(() => LinkCreateOrConnectWithoutDiveBuddyInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyDiveBuddyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema =
  Schema;
