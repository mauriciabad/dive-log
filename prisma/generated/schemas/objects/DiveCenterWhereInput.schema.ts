import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DecimalFilterObjectSchema } from "./DecimalFilter.schema";
import { LinkListRelationFilterObjectSchema } from "./LinkListRelationFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { DiveListRelationFilterObjectSchema } from "./DiveListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveCenterWhereInputObjectSchema),
        z.lazy(() => DiveCenterWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveCenterWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveCenterWhereInputObjectSchema),
        z.lazy(() => DiveCenterWhereInputObjectSchema).array(),
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
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    latitude: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    longitude: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    links: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    createdByUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    createdByUserId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    dives: z.lazy(() => DiveListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DiveCenterWhereInputObjectSchema = Schema;
