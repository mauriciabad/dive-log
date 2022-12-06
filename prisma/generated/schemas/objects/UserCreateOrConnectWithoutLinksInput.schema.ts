import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutLinksInputObjectSchema } from "./UserCreateWithoutLinksInput.schema";
import { UserUncheckedCreateWithoutLinksInputObjectSchema } from "./UserUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutLinksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutLinksInputObjectSchema = Schema;
