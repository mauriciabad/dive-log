import { z } from "zod";
import { UserPreferencesCreateWithoutUserInputObjectSchema } from "./UserPreferencesCreateWithoutUserInput.schema";
import { UserPreferencesUncheckedCreateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedCreateWithoutUserInput.schema";
import { UserPreferencesCreateOrConnectWithoutUserInputObjectSchema } from "./UserPreferencesCreateOrConnectWithoutUserInput.schema";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./UserPreferencesWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserPreferencesCreateWithoutUserInputObjectSchema),
          z.lazy(
            () => UserPreferencesUncheckedCreateWithoutUserInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserPreferencesCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => UserPreferencesWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const UserPreferencesCreateNestedOneWithoutUserInputObjectSchema =
  Schema;
