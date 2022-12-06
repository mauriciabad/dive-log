import { z } from "zod";
import { DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInput.schema";
import { DiveBuddyCreateManyDiveBuddyUserInputEnvelopeObjectSchema } from "./DiveBuddyCreateManyDiveBuddyUserInputEnvelope.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInput.schema";
import { DiveBuddyScalarWhereInputObjectSchema } from "./DiveBuddyScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedUpdateManyWithoutDiveBuddyUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema),
          z
            .lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyCreateManyDiveBuddyUserInputEnvelopeObjectSchema)
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
              DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInputObjectSchema
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

export const DiveBuddyUncheckedUpdateManyWithoutDiveBuddyUserNestedInputObjectSchema =
  Schema;
