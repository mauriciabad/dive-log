import { z } from "zod";
import { UserCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedDiveCentersInput.schema";
import { UserCreateOrConnectWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateOrConnectWithoutCreatedDiveCentersInput.schema";
import { UserUpsertWithoutCreatedDiveCentersInputObjectSchema } from "./UserUpsertWithoutCreatedDiveCentersInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUpdateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedUpdateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedUpdateWithoutCreatedDiveCentersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCreatedDiveCentersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCreatedDiveCentersInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutCreatedDiveCentersInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCreatedDiveCentersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCreatedDiveCentersInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCreatedDiveCentersInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCreatedDiveCentersNestedInputObjectSchema =
  Schema;
