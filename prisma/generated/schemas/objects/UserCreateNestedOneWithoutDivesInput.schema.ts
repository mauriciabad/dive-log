import { z } from "zod";
import { UserCreateWithoutDivesInputObjectSchema } from "./UserCreateWithoutDivesInput.schema";
import { UserUncheckedCreateWithoutDivesInputObjectSchema } from "./UserUncheckedCreateWithoutDivesInput.schema";
import { UserCreateOrConnectWithoutDivesInputObjectSchema } from "./UserCreateOrConnectWithoutDivesInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDivesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutDivesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDivesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutDivesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutDivesInputObjectSchema = Schema;
