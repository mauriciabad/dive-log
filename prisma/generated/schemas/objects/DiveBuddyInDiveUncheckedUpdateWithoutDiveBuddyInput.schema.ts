import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema } from "./NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInput> =
  z
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
      diveId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
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

export const DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInputObjectSchema =
  Schema;
