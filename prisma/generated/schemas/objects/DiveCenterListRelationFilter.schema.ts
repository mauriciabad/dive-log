import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./DiveCenterWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterListRelationFilter> = z
  .object({
    every: z.lazy(() => DiveCenterWhereInputObjectSchema).optional(),
    some: z.lazy(() => DiveCenterWhereInputObjectSchema).optional(),
    none: z.lazy(() => DiveCenterWhereInputObjectSchema).optional(),
  })
  .strict();

export const DiveCenterListRelationFilterObjectSchema = Schema;
