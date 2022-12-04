import { z } from "zod";
import { UserCreateWithoutSessionsInputObjectSchema } from "./UserCreateWithoutSessionsInput.schema";
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from "./UserUncheckedCreateWithoutSessionsInput.schema";
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from "./UserCreateOrConnectWithoutSessionsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutSessionsInputObjectSchema = Schema;
