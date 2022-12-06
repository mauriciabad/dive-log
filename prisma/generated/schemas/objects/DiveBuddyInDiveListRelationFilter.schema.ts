import { z } from "zod";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./DiveBuddyInDiveWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveListRelationFilter> = z
  .object({
    every: z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiveBuddyInDiveWhereInputObjectSchema).optional(),
  })
  .strict();

export const DiveBuddyInDiveListRelationFilterObjectSchema = Schema;
