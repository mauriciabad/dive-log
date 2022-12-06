import { z } from "zod";
import { DiveCreateNestedOneWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateNestedOneWithoutDiveBuddiesInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateWithoutDiveBuddyInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    dive: z.lazy(() => DiveCreateNestedOneWithoutDiveBuddiesInputObjectSchema),
    notes: z.string().optional().nullable(),
    role: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema = Schema;
