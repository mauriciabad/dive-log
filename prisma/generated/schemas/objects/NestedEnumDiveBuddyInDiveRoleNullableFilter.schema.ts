import { z } from "zod";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumDiveBuddyInDiveRoleNullableFilter> = z
  .object({
    equals: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
    in: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .array()
      .optional()
      .nullable(),
    notIn: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .array()
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => DiveBuddyInDiveRoleSchema),
        z.lazy(() => NestedEnumDiveBuddyInDiveRoleNullableFilterObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const NestedEnumDiveBuddyInDiveRoleNullableFilterObjectSchema = Schema;
