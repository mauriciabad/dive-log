import { z } from "zod";
import { UserUpdateWithoutDiveBuddyInputObjectSchema } from "./UserUpdateWithoutDiveBuddyInput.schema";
import { UserUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedUpdateWithoutDiveBuddyInput.schema";
import { UserCreateWithoutDiveBuddyInputObjectSchema } from "./UserCreateWithoutDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutDiveBuddyInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDiveBuddyInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDiveBuddyInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutDiveBuddyInputObjectSchema = Schema;
