import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveCountOrderByAggregateInputObjectSchema } from "./DiveCountOrderByAggregateInput.schema";
import { DiveAvgOrderByAggregateInputObjectSchema } from "./DiveAvgOrderByAggregateInput.schema";
import { DiveMaxOrderByAggregateInputObjectSchema } from "./DiveMaxOrderByAggregateInput.schema";
import { DiveMinOrderByAggregateInputObjectSchema } from "./DiveMinOrderByAggregateInput.schema";
import { DiveSumOrderByAggregateInputObjectSchema } from "./DiveSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    maxDepth: z.lazy(() => SortOrderSchema).optional(),
    waterTemp: z.lazy(() => SortOrderSchema).optional(),
    locationName: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DiveCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => DiveAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DiveMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DiveMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DiveSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DiveOrderByWithAggregationInputObjectSchema = Schema;
