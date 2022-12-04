import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { FloatFieldUpdateOperationsInputObjectSchema } from "./FloatFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyMutationInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    date: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    maxDepth: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    waterTemp: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    locationName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveUpdateManyMutationInputObjectSchema = Schema;
