import { z } from "zod";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInput> =
  z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      diveId: z.string(),
      notes: z.string().optional().nullable(),
      role: z
        .lazy(() => DiveBuddyInDiveRoleSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema =
  Schema;
