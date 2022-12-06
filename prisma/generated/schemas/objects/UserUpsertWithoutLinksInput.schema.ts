import { z } from "zod";
import { UserUpdateWithoutLinksInputObjectSchema } from "./UserUpdateWithoutLinksInput.schema";
import { UserUncheckedUpdateWithoutLinksInputObjectSchema } from "./UserUncheckedUpdateWithoutLinksInput.schema";
import { UserCreateWithoutLinksInputObjectSchema } from "./UserCreateWithoutLinksInput.schema";
import { UserUncheckedCreateWithoutLinksInputObjectSchema } from "./UserUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutLinksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutLinksInputObjectSchema = Schema;
