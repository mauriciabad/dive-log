import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { DiveListRelationFilterObjectSchema } from "./DiveListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WikipediaPageWhereInputObjectSchema),
        z.lazy(() => WikipediaPageWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WikipediaPageWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WikipediaPageWhereInputObjectSchema),
        z.lazy(() => WikipediaPageWhereInputObjectSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dives: z.lazy(() => DiveListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const WikipediaPageWhereInputObjectSchema = Schema;
