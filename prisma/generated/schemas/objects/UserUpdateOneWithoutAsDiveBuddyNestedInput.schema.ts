import { z } from "zod";
import { UserCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutAsDiveBuddyInput.schema";
import { UserCreateOrConnectWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateOrConnectWithoutAsDiveBuddyInput.schema";
import { UserUpsertWithoutAsDiveBuddyInputObjectSchema } from "./UserUpsertWithoutAsDiveBuddyInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutAsDiveBuddyInputObjectSchema } from "./UserUpdateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedUpdateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedUpdateWithoutAsDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutAsDiveBuddyNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutAsDiveBuddyInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutAsDiveBuddyInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => UserUpsertWithoutAsDiveBuddyInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutAsDiveBuddyInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAsDiveBuddyInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutAsDiveBuddyNestedInputObjectSchema = Schema;
