import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./DiveWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveListRelationFilter> = z
  .object({
    every: z.lazy(() => DiveWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiveWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiveWhereInputObjectSchema).optional(),
  })
  .strict();

export const DiveListRelationFilterObjectSchema = Schema;
