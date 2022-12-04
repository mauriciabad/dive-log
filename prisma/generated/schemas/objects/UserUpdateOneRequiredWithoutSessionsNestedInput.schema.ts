import { z } from "zod";
import { UserCreateWithoutSessionsInputObjectSchema } from "./UserCreateWithoutSessionsInput.schema";
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from "./UserUncheckedCreateWithoutSessionsInput.schema";
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from "./UserCreateOrConnectWithoutSessionsInput.schema";
import { UserUpsertWithoutSessionsInputObjectSchema } from "./UserUpsertWithoutSessionsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutSessionsInputObjectSchema } from "./UserUpdateWithoutSessionsInput.schema";
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from "./UserUncheckedUpdateWithoutSessionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
  z
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
      upsert: z
        .lazy(() => UserUpsertWithoutSessionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema =
  Schema;
