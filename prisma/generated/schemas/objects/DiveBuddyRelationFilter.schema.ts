import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./DiveBuddyWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyRelationFilter> = z
  .object({
    is: z.lazy(() => DiveBuddyWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => DiveBuddyWhereInputObjectSchema).optional(),
  })
  .strict();

export const DiveBuddyRelationFilterObjectSchema = Schema;
