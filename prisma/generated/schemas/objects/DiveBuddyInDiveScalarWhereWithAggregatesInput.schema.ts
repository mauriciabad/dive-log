import { z } from "zod";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { EnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema } from "./EnumDiveBuddyInDiveRoleNullableWithAggregatesFilter.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional(),
      diveId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      diveBuddyId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      notes: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.lazy(
            () =>
              EnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema
          ),
          z.lazy(() => DiveBuddyInDiveRoleSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const DiveBuddyInDiveScalarWhereWithAggregatesInputObjectSchema = Schema;
