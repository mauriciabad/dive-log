import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutPreferencesInputObjectSchema } from "./UserUpdateWithoutPreferencesInput.schema";
import { UserUncheckedUpdateWithoutPreferencesInputObjectSchema } from "./UserUncheckedUpdateWithoutPreferencesInput.schema";
import { UserCreateWithoutPreferencesInputObjectSchema } from "./UserCreateWithoutPreferencesInput.schema";
import { UserUncheckedCreateWithoutPreferencesInputObjectSchema } from "./UserUncheckedCreateWithoutPreferencesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutPreferencesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutPreferencesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPreferencesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutPreferencesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutPreferencesInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutPreferencesInputObjectSchema =
  Schema;
