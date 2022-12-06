import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutDiveBuddyInputObjectSchema } from "./UserCreateWithoutDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDiveBuddyInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDiveBuddyInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDiveBuddyInputObjectSchema = Schema;
