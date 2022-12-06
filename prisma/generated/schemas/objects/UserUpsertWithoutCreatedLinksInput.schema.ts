import { z } from "zod";
import { UserUpdateWithoutCreatedLinksInputObjectSchema } from "./UserUpdateWithoutCreatedLinksInput.schema";
import { UserUncheckedUpdateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedUpdateWithoutCreatedLinksInput.schema";
import { UserCreateWithoutCreatedLinksInputObjectSchema } from "./UserCreateWithoutCreatedLinksInput.schema";
import { UserUncheckedCreateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutCreatedLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCreatedLinksInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCreatedLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreatedLinksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCreatedLinksInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCreatedLinksInputObjectSchema = Schema;
