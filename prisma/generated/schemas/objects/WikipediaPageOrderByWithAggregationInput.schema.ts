import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WikipediaPageCountOrderByAggregateInputObjectSchema } from "./WikipediaPageCountOrderByAggregateInput.schema";
import { WikipediaPageAvgOrderByAggregateInputObjectSchema } from "./WikipediaPageAvgOrderByAggregateInput.schema";
import { WikipediaPageMaxOrderByAggregateInputObjectSchema } from "./WikipediaPageMaxOrderByAggregateInput.schema";
import { WikipediaPageMinOrderByAggregateInputObjectSchema } from "./WikipediaPageMinOrderByAggregateInput.schema";
import { WikipediaPageSumOrderByAggregateInputObjectSchema } from "./WikipediaPageSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => WikipediaPageCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => WikipediaPageAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => WikipediaPageMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => WikipediaPageMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => WikipediaPageSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const WikipediaPageOrderByWithAggregationInputObjectSchema = Schema;
