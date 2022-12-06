import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { DiveRelationFilterObjectSchema } from "./DiveRelationFilter.schema";
import { DiveWhereInputObjectSchema } from "./DiveWhereInput.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DiveBuddyRelationFilterObjectSchema } from "./DiveBuddyRelationFilter.schema";
import { DiveBuddyWhereInputObjectSchema } from "./DiveBuddyWhereInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { EnumDiveBuddyInDiveRoleNullableFilterObjectSchema } from "./EnumDiveBuddyInDiveRoleNullableFilter.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema),
        z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveBuddyInDiveWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema),
        z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    dive: z
      .union([
        z.lazy(() => DiveRelationFilterObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema),
      ])
      .optional(),
    diveId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    diveBuddy: z
      .union([
        z.lazy(() => DiveBuddyRelationFilterObjectSchema),
        z.lazy(() => DiveBuddyWhereInputObjectSchema),
      ])
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

export const DiveBuddyInDiveWhereInputObjectSchema = Schema;
