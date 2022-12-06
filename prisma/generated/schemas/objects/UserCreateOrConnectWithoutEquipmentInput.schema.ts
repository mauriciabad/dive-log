import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutEquipmentInputObjectSchema } from "./UserCreateWithoutEquipmentInput.schema";
import { UserUncheckedCreateWithoutEquipmentInputObjectSchema } from "./UserUncheckedCreateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEquipmentInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutEquipmentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEquipmentInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutEquipmentInputObjectSchema = Schema;
