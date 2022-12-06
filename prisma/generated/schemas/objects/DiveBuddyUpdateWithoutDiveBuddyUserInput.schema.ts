import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutDiveBuddyNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutDiveBuddyNestedInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { LinkUpdateManyWithoutDiveBuddyNestedInputObjectSchema } from "./LinkUpdateManyWithoutDiveBuddyNestedInput.schema";
import { DiveBuddyInDiveUpdateManyWithoutDiveBuddyNestedInputObjectSchema } from "./DiveBuddyInDiveUpdateManyWithoutDiveBuddyNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateWithoutDiveBuddyUserInput> = z
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
    creatorUser: z
      .lazy(() => UserUpdateOneRequiredWithoutDiveBuddyNestedInputObjectSchema)
      .optional(),
    customName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customDescription: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customImage: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    links: z
      .lazy(() => LinkUpdateManyWithoutDiveBuddyNestedInputObjectSchema)
      .optional(),
    diveBuddyInDives: z
      .lazy(
        () => DiveBuddyInDiveUpdateManyWithoutDiveBuddyNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyUpdateWithoutDiveBuddyUserInputObjectSchema = Schema;
