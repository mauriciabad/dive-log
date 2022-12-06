import { z } from "zod";
import { DiveBuddyCreateNestedOneWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateNestedOneWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateWithoutDiveInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    diveBuddy: z.lazy(
      () => DiveBuddyCreateNestedOneWithoutDiveBuddyInDivesInputObjectSchema
    ),
    notes: z.string().optional().nullable(),
    role: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DiveBuddyInDiveCreateWithoutDiveInputObjectSchema = Schema;
