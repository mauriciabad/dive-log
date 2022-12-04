import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    maxDepth: z.lazy(() => SortOrderSchema).optional(),
    waterTemp: z.lazy(() => SortOrderSchema).optional(),
    locationName: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveMaxOrderByAggregateInputObjectSchema = Schema;
