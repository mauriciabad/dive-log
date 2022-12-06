import { z } from "zod";
import { DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateManyDiveBuddyInputEnvelopeObjectSchema } from "./DiveBuddyInDiveCreateManyDiveBuddyInputEnvelope.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveScalarWhereInputObjectSchema } from "./DiveBuddyInDiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateManyWithoutDiveBuddyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema),
          z
            .lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyInDiveCreateManyDiveBuddyInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyInDiveUpdateManyWithoutDiveBuddyNestedInputObjectSchema =
  Schema;
