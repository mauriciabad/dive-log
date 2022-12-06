import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateWithoutCreatedDiveCentersInput.schema";
import { UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema } from "./UserUncheckedCreateWithoutCreatedDiveCentersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCreatedDiveCentersInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCreatedDiveCentersInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCreatedDiveCentersInputObjectSchema
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCreatedDiveCentersInputObjectSchema =
  Schema;
