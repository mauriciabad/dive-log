import { z } from "zod";
import { UserCreateWithoutLinksInputObjectSchema } from "./UserCreateWithoutLinksInput.schema";
import { UserUncheckedCreateWithoutLinksInputObjectSchema } from "./UserUncheckedCreateWithoutLinksInput.schema";
import { UserCreateOrConnectWithoutLinksInputObjectSchema } from "./UserCreateOrConnectWithoutLinksInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutLinksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutLinksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutLinksInputObjectSchema = Schema;
