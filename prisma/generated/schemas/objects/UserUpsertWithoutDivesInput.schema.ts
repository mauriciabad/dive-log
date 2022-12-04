import { z } from "zod";
import { UserUpdateWithoutDivesInputObjectSchema } from "./UserUpdateWithoutDivesInput.schema";
import { UserUncheckedUpdateWithoutDivesInputObjectSchema } from "./UserUncheckedUpdateWithoutDivesInput.schema";
import { UserCreateWithoutDivesInputObjectSchema } from "./UserCreateWithoutDivesInput.schema";
import { UserUncheckedCreateWithoutDivesInputObjectSchema } from "./UserUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutDivesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDivesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDivesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDivesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutDivesInputObjectSchema = Schema;
