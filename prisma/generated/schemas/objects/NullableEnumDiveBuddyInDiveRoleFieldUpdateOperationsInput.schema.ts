import { z } from "zod";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInput> =
  z
    .object({
      set: z
        .lazy(() => DiveBuddyInDiveRoleSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema =
  Schema;
