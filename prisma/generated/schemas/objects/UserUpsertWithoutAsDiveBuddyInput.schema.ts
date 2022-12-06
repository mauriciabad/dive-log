import { z } from "zod";
import { UserUpdateWithoutAsDiveBuddyInputObjectSchema } from "./UserUpdateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedUpdateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedUpdateWithoutAsDiveBuddyInput.schema";
import { UserCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutAsDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutAsDiveBuddyInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAsDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAsDiveBuddyInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAsDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAsDiveBuddyInputObjectSchema = Schema;
