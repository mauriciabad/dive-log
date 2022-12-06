import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutPreferencesInputObjectSchema } from "./UserUpdateWithoutPreferencesInput.schema";
import { UserUncheckedUpdateWithoutPreferencesInputObjectSchema } from "./UserUncheckedUpdateWithoutPreferencesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutPreferencesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutPreferencesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPreferencesInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutPreferencesInputObjectSchema =
  Schema;
