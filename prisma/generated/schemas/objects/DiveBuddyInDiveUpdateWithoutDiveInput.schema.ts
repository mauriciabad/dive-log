import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { DiveBuddyUpdateOneRequiredWithoutDiveBuddyInDivesNestedInputObjectSchema } from "./DiveBuddyUpdateOneRequiredWithoutDiveBuddyInDivesNestedInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema } from "./NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateWithoutDiveInput> = z
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
    diveBuddy: z
      .lazy(
        () =>
          DiveBuddyUpdateOneRequiredWithoutDiveBuddyInDivesNestedInputObjectSchema
      )
      .optional(),
    notes: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => DiveBuddyInDiveRoleSchema),
        z.lazy(
          () =>
            NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const DiveBuddyInDiveUpdateWithoutDiveInputObjectSchema = Schema;
