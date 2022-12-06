import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { UserPreferencesCreateNestedOneWithoutUserInputObjectSchema } from "./UserPreferencesCreateNestedOneWithoutUserInput.schema";
import { DiveCreateNestedManyWithoutUserInputObjectSchema } from "./DiveCreateNestedManyWithoutUserInput.schema";
import { DiveBuddyCreateNestedManyWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateNestedManyWithoutDiveBuddyUserInput.schema";
import { EquipmentUnitCreateNestedManyWithoutUserInputObjectSchema } from "./EquipmentUnitCreateNestedManyWithoutUserInput.schema";
import { DiveCenterCreateNestedManyWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateNestedManyWithoutCreatedByUserInput.schema";
import { DiveBuddyCreateNestedManyWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateNestedManyWithoutCreatorUserInput.schema";
import { LinkCreateNestedManyWithoutCreatorUserInputObjectSchema } from "./LinkCreateNestedManyWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutLinksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    preferences: z.lazy(
      () => UserPreferencesCreateNestedOneWithoutUserInputObjectSchema
    ),
    handle: z.string().optional(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    asDiveBuddy: z
      .lazy(
        () => DiveBuddyCreateNestedManyWithoutDiveBuddyUserInputObjectSchema
      )
      .optional(),
    equipment: z
      .lazy(() => EquipmentUnitCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    createdDiveCenters: z
      .lazy(
        () => DiveCenterCreateNestedManyWithoutCreatedByUserInputObjectSchema
      )
      .optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyCreateNestedManyWithoutCreatorUserInputObjectSchema)
      .optional(),
    createdLinks: z
      .lazy(() => LinkCreateNestedManyWithoutCreatorUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutLinksInputObjectSchema = Schema;
