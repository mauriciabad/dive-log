import { z } from "zod";
import { UserPreferencesCreateWithoutUserInputObjectSchema } from "./UserPreferencesCreateWithoutUserInput.schema";
import { UserPreferencesUncheckedCreateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedCreateWithoutUserInput.schema";
import { UserPreferencesCreateOrConnectWithoutUserInputObjectSchema } from "./UserPreferencesCreateOrConnectWithoutUserInput.schema";
import { UserPreferencesUpsertWithoutUserInputObjectSchema } from "./UserPreferencesUpsertWithoutUserInput.schema";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./UserPreferencesWhereUniqueInput.schema";
import { UserPreferencesUpdateWithoutUserInputObjectSchema } from "./UserPreferencesUpdateWithoutUserInput.schema";
import { UserPreferencesUncheckedUpdateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesUpdateOneRequiredWithoutUserNestedInput> =
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
      upsert: z
        .lazy(() => UserPreferencesUpsertWithoutUserInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => UserPreferencesWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => UserPreferencesUpdateWithoutUserInputObjectSchema),
          z.lazy(
            () => UserPreferencesUncheckedUpdateWithoutUserInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserPreferencesUpdateOneRequiredWithoutUserNestedInputObjectSchema =
  Schema;
