import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveBuddyInDiveCountOrderByAggregateInputObjectSchema } from "./DiveBuddyInDiveCountOrderByAggregateInput.schema";
import { DiveBuddyInDiveMaxOrderByAggregateInputObjectSchema } from "./DiveBuddyInDiveMaxOrderByAggregateInput.schema";
import { DiveBuddyInDiveMinOrderByAggregateInputObjectSchema } from "./DiveBuddyInDiveMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    diveId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddyId: z.lazy(() => SortOrderSchema).optional(),
    notes: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiveBuddyInDiveCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DiveBuddyInDiveMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DiveBuddyInDiveMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveBuddyInDiveOrderByWithAggregationInputObjectSchema = Schema;
