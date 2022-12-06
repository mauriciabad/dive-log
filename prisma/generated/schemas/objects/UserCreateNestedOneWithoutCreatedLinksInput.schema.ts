import { z } from "zod";
import { UserCreateWithoutCreatedLinksInputObjectSchema } from "./UserCreateWithoutCreatedLinksInput.schema";
import { UserUncheckedCreateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedLinksInput.schema";
import { UserCreateOrConnectWithoutCreatedLinksInputObjectSchema } from "./UserCreateOrConnectWithoutCreatedLinksInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedLinksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutCreatedLinksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCreatedLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutCreatedLinksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCreatedLinksInputObjectSchema = Schema;
