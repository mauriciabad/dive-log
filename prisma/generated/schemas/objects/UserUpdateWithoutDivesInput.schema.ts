import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUpdateManyWithoutUserNestedInput.schema";
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema";
import { UserPreferencesUpdateOneRequiredWithoutUserNestedInputObjectSchema } from "./UserPreferencesUpdateOneRequiredWithoutUserNestedInput.schema";
import { DiveBuddyUpdateManyWithoutDiveBuddyUserNestedInputObjectSchema } from "./DiveBuddyUpdateManyWithoutDiveBuddyUserNestedInput.schema";
import { EquipmentUnitUpdateManyWithoutUserNestedInputObjectSchema } from "./EquipmentUnitUpdateManyWithoutUserNestedInput.schema";
import { DiveCenterUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from "./DiveCenterUpdateManyWithoutCreatedByUserNestedInput.schema";
import { DiveBuddyUpdateManyWithoutCreatorUserNestedInputObjectSchema } from "./DiveBuddyUpdateManyWithoutCreatorUserNestedInput.schema";
import { LinkUpdateManyWithoutUserNestedInputObjectSchema } from "./LinkUpdateManyWithoutUserNestedInput.schema";
import { LinkUpdateManyWithoutCreatorUserNestedInputObjectSchema } from "./LinkUpdateManyWithoutCreatorUserNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithoutDivesInput> = z
  .object({
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    preferences: z
      .lazy(
        () => UserPreferencesUpdateOneRequiredWithoutUserNestedInputObjectSchema
      )
      .optional(),
    handle: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    asDiveBuddy: z
      .lazy(
        () => DiveBuddyUpdateManyWithoutDiveBuddyUserNestedInputObjectSchema
      )
      .optional(),
    equipment: z
      .lazy(() => EquipmentUnitUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    createdDiveCenters: z
      .lazy(
        () => DiveCenterUpdateManyWithoutCreatedByUserNestedInputObjectSchema
      )
      .optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyUpdateManyWithoutCreatorUserNestedInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinkUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    createdLinks: z
      .lazy(() => LinkUpdateManyWithoutCreatorUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutDivesInputObjectSchema = Schema;
