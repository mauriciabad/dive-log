import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";
import { NullableEnumUnitSystemFieldUpdateOperationsInputObjectSchema } from "./NullableEnumUnitSystemFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesUncheckedUpdateManyInput> = z
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
    publicProfile: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    lengthUnits: z
      .union([
        z.lazy(() => UnitSystemSchema),
        z.lazy(
          () => NullableEnumUnitSystemFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    weightUnits: z
      .union([
        z.lazy(() => UnitSystemSchema),
        z.lazy(
          () => NullableEnumUnitSystemFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    temperatureUnits: z
      .union([
        z.lazy(() => UnitSystemSchema),
        z.lazy(
          () => NullableEnumUnitSystemFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const UserPreferencesUncheckedUpdateManyInputObjectSchema = Schema;
