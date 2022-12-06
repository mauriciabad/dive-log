import { z } from "zod";
import { UserUpdateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUpdateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedUpdateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedUpdateWithoutCreatedDiveCentersInput.schema";
import { UserCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedDiveCentersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutCreatedDiveCentersInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCreatedDiveCentersInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutCreatedDiveCentersInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCreatedDiveCentersInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutCreatedDiveCentersInputObjectSchema = Schema;
