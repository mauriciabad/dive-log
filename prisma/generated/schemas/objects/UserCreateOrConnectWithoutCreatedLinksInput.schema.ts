import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutCreatedLinksInputObjectSchema } from "./UserCreateWithoutCreatedLinksInput.schema";
import { UserUncheckedCreateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedLinksInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreatedLinksInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCreatedLinksInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutCreatedLinksInputObjectSchema = Schema;
