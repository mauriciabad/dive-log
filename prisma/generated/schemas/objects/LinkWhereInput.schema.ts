import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumLinkTypeFilterObjectSchema } from "./EnumLinkTypeFilter.schema";
import { LinkTypeSchema } from "../enums/LinkType.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { DiveRelationFilterObjectSchema } from "./DiveRelationFilter.schema";
import { DiveWhereInputObjectSchema } from "./DiveWhereInput.schema";
import { DiveBuddyRelationFilterObjectSchema } from "./DiveBuddyRelationFilter.schema";
import { DiveBuddyWhereInputObjectSchema } from "./DiveBuddyWhereInput.schema";
import { DiveCenterRelationFilterObjectSchema } from "./DiveCenterRelationFilter.schema";
import { DiveCenterWhereInputObjectSchema } from "./DiveCenterWhereInput.schema";
import { DiveSiteRelationFilterObjectSchema } from "./DiveSiteRelationFilter.schema";
import { DiveSiteWhereInputObjectSchema } from "./DiveSiteWhereInput.schema";
import { EquipmentUnitRelationFilterObjectSchema } from "./EquipmentUnitRelationFilter.schema";
import { EquipmentUnitWhereInputObjectSchema } from "./EquipmentUnitWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LinkWhereInputObjectSchema),
        z.lazy(() => LinkWhereInputObjectSchema).array(),
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
    link: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumLinkTypeFilterObjectSchema),
        z.lazy(() => LinkTypeSchema),
      ])
      .optional(),
    title: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    thumbnail: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    creatorUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    creatorUserId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dive: z
      .union([
        z.lazy(() => DiveRelationFilterObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    diveBuddy: z
      .union([
        z.lazy(() => DiveBuddyRelationFilterObjectSchema),
        z.lazy(() => DiveBuddyWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveBuddyId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    diveCenter: z
      .union([
        z.lazy(() => DiveCenterRelationFilterObjectSchema),
        z.lazy(() => DiveCenterWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveCenterId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    diveSite: z
      .union([
        z.lazy(() => DiveSiteRelationFilterObjectSchema),
        z.lazy(() => DiveSiteWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveSiteId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    EquipmentUnit: z
      .union([
        z.lazy(() => EquipmentUnitRelationFilterObjectSchema),
        z.lazy(() => EquipmentUnitWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    equipmentUnitId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const LinkWhereInputObjectSchema = Schema;
