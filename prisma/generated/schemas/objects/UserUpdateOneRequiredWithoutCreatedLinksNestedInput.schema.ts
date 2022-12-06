import { z } from "zod";
import { UserCreateWithoutCreatedLinksInputObjectSchema } from "./UserCreateWithoutCreatedLinksInput.schema";
import { UserUncheckedCreateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedLinksInput.schema";
import { UserCreateOrConnectWithoutCreatedLinksInputObjectSchema } from "./UserCreateOrConnectWithoutCreatedLinksInput.schema";
import { UserUpsertWithoutCreatedLinksInputObjectSchema } from "./UserUpsertWithoutCreatedLinksInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutCreatedLinksInputObjectSchema } from "./UserUpdateWithoutCreatedLinksInput.schema";
import { UserUncheckedUpdateWithoutCreatedLinksInputObjectSchema } from "./UserUncheckedUpdateWithoutCreatedLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedLinksNestedInput> =
  z
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
      upsert: z
        .lazy(() => UserUpsertWithoutCreatedLinksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCreatedLinksInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCreatedLinksInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCreatedLinksNestedInputObjectSchema =
  Schema;
