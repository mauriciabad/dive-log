import { z } from "zod";
import { UserCreateWithoutDiveBuddyInputObjectSchema } from "./UserCreateWithoutDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutDiveBuddyInput.schema";
import { UserCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./UserCreateOrConnectWithoutDiveBuddyInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDiveBuddyInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutDiveBuddyInputObjectSchema = Schema;
