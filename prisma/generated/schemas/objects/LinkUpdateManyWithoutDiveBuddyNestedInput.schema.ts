import { z } from "zod";
import { LinkCreateWithoutDiveBuddyInputObjectSchema } from "./LinkCreateWithoutDiveBuddyInput.schema";
import { LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveBuddyInput.schema";
import { LinkCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveBuddyInput.schema";
import { LinkUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema } from "./LinkUpsertWithWhereUniqueWithoutDiveBuddyInput.schema";
import { LinkCreateManyDiveBuddyInputEnvelopeObjectSchema } from "./LinkCreateManyDiveBuddyInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema } from "./LinkUpdateWithWhereUniqueWithoutDiveBuddyInput.schema";
import { LinkUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema } from "./LinkUpdateManyWithWhereWithoutDiveBuddyInput.schema";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateManyWithoutDiveBuddyNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => LinkUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema
        ),
        z
          .lazy(
            () => LinkUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LinkCreateManyDiveBuddyInputEnvelopeObjectSchema)
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
          () => LinkUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema
        ),
        z
          .lazy(
            () => LinkUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => LinkUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema),
        z
          .lazy(() => LinkUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema)
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

export const LinkUpdateManyWithoutDiveBuddyNestedInputObjectSchema = Schema;
