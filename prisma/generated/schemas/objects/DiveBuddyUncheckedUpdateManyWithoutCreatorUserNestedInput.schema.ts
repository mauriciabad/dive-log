import { z } from "zod";
import { DiveBuddyCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutCreatorUserInput.schema";
import { DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutCreatorUserInput.schema";
import { DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInput.schema";
import { DiveBuddyCreateManyCreatorUserInputEnvelopeObjectSchema } from "./DiveBuddyCreateManyCreatorUserInputEnvelope.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInput.schema";
import { DiveBuddyUpdateManyWithWhereWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUpdateManyWithWhereWithoutCreatorUserInput.schema";
import { DiveBuddyScalarWhereInputObjectSchema } from "./DiveBuddyScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedUpdateManyWithoutCreatorUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema),
          z
            .lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyCreateManyCreatorUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiveBuddyUpdateManyWithWhereWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpdateManyWithWhereWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiveBuddyScalarWhereInputObjectSchema),
          z.lazy(() => DiveBuddyScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema =
  Schema;
