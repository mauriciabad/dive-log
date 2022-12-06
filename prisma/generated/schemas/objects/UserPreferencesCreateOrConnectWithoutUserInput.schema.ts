import { z } from "zod";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./UserPreferencesWhereUniqueInput.schema";
import { UserPreferencesCreateWithoutUserInputObjectSchema } from "./UserPreferencesCreateWithoutUserInput.schema";
import { UserPreferencesUncheckedCreateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserPreferencesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserPreferencesCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => UserPreferencesUncheckedCreateWithoutUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const UserPreferencesCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
