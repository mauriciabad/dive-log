import { z } from "zod";
import { UserCreateWithoutEquipmentInputObjectSchema } from "./UserCreateWithoutEquipmentInput.schema";
import { UserUncheckedCreateWithoutEquipmentInputObjectSchema } from "./UserUncheckedCreateWithoutEquipmentInput.schema";
import { UserCreateOrConnectWithoutEquipmentInputObjectSchema } from "./UserCreateOrConnectWithoutEquipmentInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEquipmentInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutEquipmentInputObjectSchema = Schema;
