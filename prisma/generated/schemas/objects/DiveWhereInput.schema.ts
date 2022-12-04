import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveWhereInputObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveWhereInputObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    User: z
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
    date: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    maxDepth: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    waterTemp: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    locationName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const DiveWhereInputObjectSchema = Schema;
