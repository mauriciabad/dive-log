import { z } from "zod";
import { UserCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateWithoutAsDiveBuddyInput.schema";
import { UserUncheckedCreateWithoutAsDiveBuddyInputObjectSchema } from "./UserUncheckedCreateWithoutAsDiveBuddyInput.schema";
import { UserCreateOrConnectWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateOrConnectWithoutAsDiveBuddyInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAsDiveBuddyInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutAsDiveBuddyInputObjectSchema = Schema;
