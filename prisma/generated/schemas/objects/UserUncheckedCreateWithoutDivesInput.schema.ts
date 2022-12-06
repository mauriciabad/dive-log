import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { DiveBuddyUncheckedCreateNestedManyWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedCreateNestedManyWithoutDiveBuddyUserInput.schema";
import { EquipmentUnitUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./EquipmentUnitUncheckedCreateNestedManyWithoutUserInput.schema";
import { DiveCenterUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedCreateNestedManyWithoutCreatedByUserInput.schema";
import { DiveBuddyUncheckedCreateNestedManyWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedCreateNestedManyWithoutCreatorUserInput.schema";
import { LinkUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutUserInput.schema";
import { LinkUncheckedCreateNestedManyWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutDivesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    userPreferencesId: z.string(),
    handle: z.string().optional(),
    asDiveBuddy: z
      .lazy(
        () =>
          DiveBuddyUncheckedCreateNestedManyWithoutDiveBuddyUserInputObjectSchema
      )
      .optional(),
    equipment: z
      .lazy(
        () => EquipmentUnitUncheckedCreateNestedManyWithoutUserInputObjectSchema
      )
      .optional(),
    createdDiveCenters: z
      .lazy(
        () =>
          DiveCenterUncheckedCreateNestedManyWithoutCreatedByUserInputObjectSchema
      )
      .optional(),
    diveBuddy: z
      .lazy(
        () =>
          DiveBuddyUncheckedCreateNestedManyWithoutCreatorUserInputObjectSchema
      )
      .optional(),
    links: z
      .lazy(() => LinkUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdLinks: z
      .lazy(
        () => LinkUncheckedCreateNestedManyWithoutCreatorUserInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutDivesInputObjectSchema = Schema;
