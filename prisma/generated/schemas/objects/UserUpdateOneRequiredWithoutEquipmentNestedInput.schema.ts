import { z } from "zod";
import { UserCreateWithoutEquipmentInputObjectSchema } from "./UserCreateWithoutEquipmentInput.schema";
import { UserUncheckedCreateWithoutEquipmentInputObjectSchema } from "./UserUncheckedCreateWithoutEquipmentInput.schema";
import { UserCreateOrConnectWithoutEquipmentInputObjectSchema } from "./UserCreateOrConnectWithoutEquipmentInput.schema";
import { UserUpsertWithoutEquipmentInputObjectSchema } from "./UserUpsertWithoutEquipmentInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutEquipmentInputObjectSchema } from "./UserUpdateWithoutEquipmentInput.schema";
import { UserUncheckedUpdateWithoutEquipmentInputObjectSchema } from "./UserUncheckedUpdateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEquipmentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEquipmentInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutEquipmentInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutEquipmentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutEquipmentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutEquipmentInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutEquipmentInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutEquipmentNestedInputObjectSchema =
  Schema;
