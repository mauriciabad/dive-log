import { z } from "zod";
import { DiveCreateNestedOneWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateNestedOneWithoutDiveBuddiesInput.schema";
import { DiveBuddyCreateNestedOneWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateNestedOneWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    dive: z.lazy(() => DiveCreateNestedOneWithoutDiveBuddiesInputObjectSchema),
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

export const DiveBuddyInDiveCreateInputObjectSchema = Schema;
