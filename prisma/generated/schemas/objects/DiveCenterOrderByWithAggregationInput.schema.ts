import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveCenterCountOrderByAggregateInputObjectSchema } from "./DiveCenterCountOrderByAggregateInput.schema";
import { DiveCenterAvgOrderByAggregateInputObjectSchema } from "./DiveCenterAvgOrderByAggregateInput.schema";
import { DiveCenterMaxOrderByAggregateInputObjectSchema } from "./DiveCenterMaxOrderByAggregateInput.schema";
import { DiveCenterMinOrderByAggregateInputObjectSchema } from "./DiveCenterMinOrderByAggregateInput.schema";
import { DiveCenterSumOrderByAggregateInputObjectSchema } from "./DiveCenterSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    createdByUserId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiveCenterCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => DiveCenterAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DiveCenterMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DiveCenterMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => DiveCenterSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveCenterOrderByWithAggregationInputObjectSchema = Schema;
