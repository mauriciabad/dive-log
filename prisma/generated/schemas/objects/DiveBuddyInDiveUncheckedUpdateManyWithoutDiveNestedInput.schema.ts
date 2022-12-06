import { z } from "zod";
import { DiveBuddyInDiveCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateOrConnectWithoutDiveInput.schema";
import { DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInput.schema";
import { DiveBuddyInDiveCreateManyDiveInputEnvelopeObjectSchema } from "./DiveBuddyInDiveCreateManyDiveInputEnvelope.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInput.schema";
import { DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInput.schema";
import { DiveBuddyInDiveScalarWhereInputObjectSchema } from "./DiveBuddyInDiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUncheckedUpdateManyWithoutDiveNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema),
          z
            .lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyInDiveCreateManyDiveInputEnvelopeObjectSchema)
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
              DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInputObjectSchema
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

export const DiveBuddyInDiveUncheckedUpdateManyWithoutDiveNestedInputObjectSchema =
  Schema;
