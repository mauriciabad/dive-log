import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutDivesInputObjectSchema } from "./UserCreateWithoutDivesInput.schema";
import { UserUncheckedCreateWithoutDivesInputObjectSchema } from "./UserUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDivesInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDivesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDivesInputObjectSchema = Schema;
