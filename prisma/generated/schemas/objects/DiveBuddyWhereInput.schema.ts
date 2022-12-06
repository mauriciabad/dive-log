import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { LinkListRelationFilterObjectSchema } from "./LinkListRelationFilter.schema";
import { DiveBuddyInDiveListRelationFilterObjectSchema } from "./DiveBuddyInDiveListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveBuddyWhereInputObjectSchema),
        z.lazy(() => DiveBuddyWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveBuddyWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveBuddyWhereInputObjectSchema),
        z.lazy(() => DiveBuddyWhereInputObjectSchema).array(),
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
    creatorUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    creatorUserId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    diveBuddyUser: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveBuddyUserId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    customName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    customDescription: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    customImage: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    links: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    diveBuddyInDives: z
      .lazy(() => DiveBuddyInDiveListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const DiveBuddyWhereInputObjectSchema = Schema;
