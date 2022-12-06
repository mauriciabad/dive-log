import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema";
import { DiveUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./DiveUncheckedUpdateManyWithoutUserNestedInput.schema";
import { DiveBuddyUncheckedUpdateManyWithoutDiveBuddyUserNestedInputObjectSchema } from "./DiveBuddyUncheckedUpdateManyWithoutDiveBuddyUserNestedInput.schema";
import { EquipmentUnitUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./EquipmentUnitUncheckedUpdateManyWithoutUserNestedInput.schema";
import { DiveCenterUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema } from "./DiveCenterUncheckedUpdateManyWithoutCreatedByUserNestedInput.schema";
import { DiveBuddyUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema } from "./DiveBuddyUncheckedUpdateManyWithoutCreatorUserNestedInput.schema";
import { LinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutUserNestedInput.schema";
import { LinkUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutCreatorUserNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z
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
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    userPreferencesId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    handle: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dives: z
      .lazy(() => DiveUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    asDiveBuddy: z
      .lazy(
        () =>
          DiveBuddyUncheckedUpdateManyWithoutDiveBuddyUserNestedInputObjectSchema
      )
      .optional(),
    equipment: z
      .lazy(
        () => EquipmentUnitUncheckedUpdateManyWithoutUserNestedInputObjectSchema
      )
      .optional(),
    createdDiveCenters: z
      .lazy(
        () =>
          DiveCenterUncheckedUpdateManyWithoutCreatedByUserNestedInputObjectSchema
      )
      .optional(),
    diveBuddy: z
      .lazy(
        () =>
          DiveBuddyUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema
      )
      .optional(),
    links: z
      .lazy(() => LinkUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    createdLinks: z
      .lazy(
        () => LinkUncheckedUpdateManyWithoutCreatorUserNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutAccountsInputObjectSchema = Schema;
