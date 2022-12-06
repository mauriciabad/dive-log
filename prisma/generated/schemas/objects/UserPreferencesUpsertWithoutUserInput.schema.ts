import { z } from "zod";
import { UserPreferencesUpdateWithoutUserInputObjectSchema } from "./UserPreferencesUpdateWithoutUserInput.schema";
import { UserPreferencesUncheckedUpdateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedUpdateWithoutUserInput.schema";
import { UserPreferencesCreateWithoutUserInputObjectSchema } from "./UserPreferencesCreateWithoutUserInput.schema";
import { UserPreferencesUncheckedCreateWithoutUserInputObjectSchema } from "./UserPreferencesUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserPreferencesUpdateWithoutUserInputObjectSchema),
      z.lazy(() => UserPreferencesUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserPreferencesCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserPreferencesUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserPreferencesUpsertWithoutUserInputObjectSchema = Schema;
