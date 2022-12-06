import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./DiveBuddyWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyListRelationFilter> = z
  .object({
    every: z.lazy(() => DiveBuddyWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiveBuddyWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiveBuddyWhereInputObjectSchema).optional(),
  })
  .strict();

export const DiveBuddyListRelationFilterObjectSchema = Schema;
