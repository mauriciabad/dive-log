import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutSessionsNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sessionToken: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    expires: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionUpdateInputObjectSchema = Schema;
