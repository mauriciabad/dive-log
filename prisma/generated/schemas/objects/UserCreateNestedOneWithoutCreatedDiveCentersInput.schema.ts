import { z } from "zod";
import { UserCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedDiveCentersInput.schema";
import { UserCreateOrConnectWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateOrConnectWithoutCreatedDiveCentersInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCreatedDiveCentersInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCreatedDiveCentersInputObjectSchema =
  Schema;
