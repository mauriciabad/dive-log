import { z } from "zod";
import { UserCreateWithoutDivesInputObjectSchema } from "./UserCreateWithoutDivesInput.schema";
import { UserUncheckedCreateWithoutDivesInputObjectSchema } from "./UserUncheckedCreateWithoutDivesInput.schema";
import { UserCreateOrConnectWithoutDivesInputObjectSchema } from "./UserCreateOrConnectWithoutDivesInput.schema";
import { UserUpsertWithoutDivesInputObjectSchema } from "./UserUpsertWithoutDivesInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutDivesInputObjectSchema } from "./UserUpdateWithoutDivesInput.schema";
import { UserUncheckedUpdateWithoutDivesInputObjectSchema } from "./UserUncheckedUpdateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDivesNestedInput> = z
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
    upsert: z.lazy(() => UserUpsertWithoutDivesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDivesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutDivesNestedInputObjectSchema = Schema;
