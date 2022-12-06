import { z } from "zod";
import { UserCreateWithoutPreferencesInputObjectSchema } from "./UserCreateWithoutPreferencesInput.schema";
import { UserUncheckedCreateWithoutPreferencesInputObjectSchema } from "./UserUncheckedCreateWithoutPreferencesInput.schema";
import { UserCreateOrConnectWithoutPreferencesInputObjectSchema } from "./UserCreateOrConnectWithoutPreferencesInput.schema";
import { UserUpsertWithWhereUniqueWithoutPreferencesInputObjectSchema } from "./UserUpsertWithWhereUniqueWithoutPreferencesInput.schema";
import { UserCreateManyPreferencesInputEnvelopeObjectSchema } from "./UserCreateManyPreferencesInputEnvelope.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithWhereUniqueWithoutPreferencesInputObjectSchema } from "./UserUpdateWithWhereUniqueWithoutPreferencesInput.schema";
import { UserUpdateManyWithWhereWithoutPreferencesInputObjectSchema } from "./UserUpdateManyWithWhereWithoutPreferencesInput.schema";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutPreferencesNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => UserUpsertWithWhereUniqueWithoutPreferencesInputObjectSchema
        ),
        z
          .lazy(
            () => UserUpsertWithWhereUniqueWithoutPreferencesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => UserCreateManyPreferencesInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserWhereUniqueInputObjectSchema),
        z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => UserUpdateWithWhereUniqueWithoutPreferencesInputObjectSchema
        ),
        z
          .lazy(
            () => UserUpdateWithWhereUniqueWithoutPreferencesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => UserUpdateManyWithWhereWithoutPreferencesInputObjectSchema
        ),
        z
          .lazy(
            () => UserUpdateManyWithWhereWithoutPreferencesInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserScalarWhereInputObjectSchema),
        z.lazy(() => UserScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateManyWithoutPreferencesNestedInputObjectSchema = Schema;
