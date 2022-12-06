import { z } from "zod";
import { WikipediaPageWhereInputObjectSchema } from "./WikipediaPageWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageListRelationFilter> = z
  .object({
    every: z.lazy(() => WikipediaPageWhereInputObjectSchema).optional(),
    some: z.lazy(() => WikipediaPageWhereInputObjectSchema).optional(),
    none: z.lazy(() => WikipediaPageWhereInputObjectSchema).optional(),
  })
  .strict();

export const WikipediaPageListRelationFilterObjectSchema = Schema;
