import { z } from "zod";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { NestedEnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema } from "./NestedEnumDiveBuddyInDiveRoleNullableWithAggregatesFilter.schema";
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema";
import { NestedEnumDiveBuddyInDiveRoleNullableFilterObjectSchema } from "./NestedEnumDiveBuddyInDiveRoleNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumDiveBuddyInDiveRoleNullableWithAggregatesFilter> =
  z
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
          z.lazy(
            () =>
              NestedEnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema
          ),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
      _min: z
        .lazy(() => NestedEnumDiveBuddyInDiveRoleNullableFilterObjectSchema)
        .optional(),
      _max: z
        .lazy(() => NestedEnumDiveBuddyInDiveRoleNullableFilterObjectSchema)
        .optional(),
    })
    .strict();

export const EnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema =
  Schema;
