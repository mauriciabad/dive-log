import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutAsDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAsDiveBuddyInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAsDiveBuddyInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAsDiveBuddyInputObjectSchema = Schema;
