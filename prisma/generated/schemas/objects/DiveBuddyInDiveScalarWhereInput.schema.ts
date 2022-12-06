import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { EnumDiveBuddyInDiveRoleNullableFilterObjectSchema } from "./EnumDiveBuddyInDiveRoleNullableFilter.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema),
        z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema),
        z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    diveId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    diveBuddyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    notes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => EnumDiveBuddyInDiveRoleNullableFilterObjectSchema),
        z.lazy(() => DiveBuddyInDiveRoleSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const DiveBuddyInDiveScalarWhereInputObjectSchema = Schema;
