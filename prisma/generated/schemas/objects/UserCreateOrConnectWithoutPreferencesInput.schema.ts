import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutPreferencesInputObjectSchema } from "./UserCreateWithoutPreferencesInput.schema";
import { UserUncheckedCreateWithoutPreferencesInputObjectSchema } from "./UserUncheckedCreateWithoutPreferencesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutPreferencesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutPreferencesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutPreferencesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutPreferencesInputObjectSchema = Schema;
