import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";
import { AccountListRelationFilterObjectSchema } from "./AccountListRelationFilter.schema";
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema";
import { UserPreferencesRelationFilterObjectSchema } from "./UserPreferencesRelationFilter.schema";
import { UserPreferencesWhereInputObjectSchema } from "./UserPreferencesWhereInput.schema";
import { DiveListRelationFilterObjectSchema } from "./DiveListRelationFilter.schema";
import { DiveBuddyListRelationFilterObjectSchema } from "./DiveBuddyListRelationFilter.schema";
import { EquipmentUnitListRelationFilterObjectSchema } from "./EquipmentUnitListRelationFilter.schema";
import { DiveCenterListRelationFilterObjectSchema } from "./DiveCenterListRelationFilter.schema";
import { LinkListRelationFilterObjectSchema } from "./LinkListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    preferences: z
      .union([
        z.lazy(() => UserPreferencesRelationFilterObjectSchema),
        z.lazy(() => UserPreferencesWhereInputObjectSchema),
      ])
      .optional(),
    userPreferencesId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    handle: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dives: z.lazy(() => DiveListRelationFilterObjectSchema).optional(),
    asDiveBuddy: z
      .lazy(() => DiveBuddyListRelationFilterObjectSchema)
      .optional(),
    equipment: z
      .lazy(() => EquipmentUnitListRelationFilterObjectSchema)
      .optional(),
    createdDiveCenters: z
      .lazy(() => DiveCenterListRelationFilterObjectSchema)
      .optional(),
    diveBuddy: z.lazy(() => DiveBuddyListRelationFilterObjectSchema).optional(),
    links: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    createdLinks: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
