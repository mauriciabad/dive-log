import { z } from "zod";
import { UserCreateWithoutDiveBuddyInputObjectSchema } from "./UserCreateWithoutDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutDiveBuddyInput.schema";
import { UserCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./UserCreateOrConnectWithoutDiveBuddyInput.schema";
import { UserUpsertWithoutDiveBuddyInputObjectSchema } from "./UserUpsertWithoutDiveBuddyInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutDiveBuddyInputObjectSchema } from "./UserUpdateWithoutDiveBuddyInput.schema";
import { UserUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedUpdateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiveBuddyNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDiveBuddyInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutDiveBuddyInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutDiveBuddyInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutDiveBuddyInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutDiveBuddyInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutDiveBuddyInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutDiveBuddyNestedInputObjectSchema =
  Schema;
