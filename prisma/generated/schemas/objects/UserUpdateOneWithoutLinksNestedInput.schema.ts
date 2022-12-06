import { z } from "zod";
import { UserCreateWithoutLinksInputObjectSchema } from "./UserCreateWithoutLinksInput.schema";
import { UserUncheckedCreateWithoutLinksInputObjectSchema } from "./UserUncheckedCreateWithoutLinksInput.schema";
import { UserCreateOrConnectWithoutLinksInputObjectSchema } from "./UserCreateOrConnectWithoutLinksInput.schema";
import { UserUpsertWithoutLinksInputObjectSchema } from "./UserUpsertWithoutLinksInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutLinksInputObjectSchema } from "./UserUpdateWithoutLinksInput.schema";
import { UserUncheckedUpdateWithoutLinksInputObjectSchema } from "./UserUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutLinksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutLinksInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutLinksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutLinksInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLinksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
