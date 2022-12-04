import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";
import { FloatWithAggregatesFilterObjectSchema } from "./FloatWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    userId: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    maxDepth: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    waterTemp: z
      .union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    locationName: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const DiveScalarWhereWithAggregatesInputObjectSchema = Schema;
