import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSumOrderByAggregateInput> = z
  .object({
    maxDepth: z.lazy(() => SortOrderSchema).optional(),
    waterTemp: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveSumOrderByAggregateInputObjectSchema = Schema;
