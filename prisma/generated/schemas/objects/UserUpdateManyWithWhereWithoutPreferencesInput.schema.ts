import { z } from "zod";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";
import { UserUpdateManyMutationInputObjectSchema } from "./UserUpdateManyMutationInput.schema";
import { UserUncheckedUpdateManyWithoutUserInputObjectSchema } from "./UserUncheckedUpdateManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutPreferencesInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutPreferencesInputObjectSchema =
  Schema;
