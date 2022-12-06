import { z } from "zod";
import { UserUpdateWithoutEquipmentInputObjectSchema } from "./UserUpdateWithoutEquipmentInput.schema";
import { UserUncheckedUpdateWithoutEquipmentInputObjectSchema } from "./UserUncheckedUpdateWithoutEquipmentInput.schema";
import { UserCreateWithoutEquipmentInputObjectSchema } from "./UserCreateWithoutEquipmentInput.schema";
import { UserUncheckedCreateWithoutEquipmentInputObjectSchema } from "./UserUncheckedCreateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutEquipmentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEquipmentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEquipmentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEquipmentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEquipmentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutEquipmentInputObjectSchema = Schema;
