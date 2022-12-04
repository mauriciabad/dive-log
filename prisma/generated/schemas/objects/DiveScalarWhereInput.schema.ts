import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveScalarWhereInputObjectSchema),
        z.lazy(() => DiveScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveScalarWhereInputObjectSchema),
        z.lazy(() => DiveScalarWhereInputObjectSchema).array(),
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

export const DiveScalarWhereInputObjectSchema = Schema;
