import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutSessionsInputObjectSchema } from "./UserCreateWithoutSessionsInput.schema";
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from "./UserUncheckedCreateWithoutSessionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
