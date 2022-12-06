import { z } from "zod";
import { UserCreateWithoutPreferencesInputObjectSchema } from "./UserCreateWithoutPreferencesInput.schema";
import { UserUncheckedCreateWithoutPreferencesInputObjectSchema } from "./UserUncheckedCreateWithoutPreferencesInput.schema";
import { UserCreateOrConnectWithoutPreferencesInputObjectSchema } from "./UserCreateOrConnectWithoutPreferencesInput.schema";
import { UserCreateManyPreferencesInputEnvelopeObjectSchema } from "./UserCreateManyPreferencesInputEnvelope.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutPreferencesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPreferencesInputObjectSchema),
          z.lazy(() => UserCreateWithoutPreferencesInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutPreferencesInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutPreferencesInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutPreferencesInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutPreferencesInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyPreferencesInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutPreferencesInputObjectSchema =
  Schema;
