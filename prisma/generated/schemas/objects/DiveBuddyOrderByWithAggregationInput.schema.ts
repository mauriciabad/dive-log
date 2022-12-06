import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveBuddyCountOrderByAggregateInputObjectSchema } from "./DiveBuddyCountOrderByAggregateInput.schema";
import { DiveBuddyMaxOrderByAggregateInputObjectSchema } from "./DiveBuddyMaxOrderByAggregateInput.schema";
import { DiveBuddyMinOrderByAggregateInputObjectSchema } from "./DiveBuddyMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    creatorUserId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddyUserId: z.lazy(() => SortOrderSchema).optional(),
    customName: z.lazy(() => SortOrderSchema).optional(),
    customDescription: z.lazy(() => SortOrderSchema).optional(),
    customImage: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiveBuddyCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DiveBuddyMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DiveBuddyMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveBuddyOrderByWithAggregationInputObjectSchema = Schema;
