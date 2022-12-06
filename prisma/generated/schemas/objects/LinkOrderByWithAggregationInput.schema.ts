import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { LinkCountOrderByAggregateInputObjectSchema } from "./LinkCountOrderByAggregateInput.schema";
import { LinkMaxOrderByAggregateInputObjectSchema } from "./LinkMaxOrderByAggregateInput.schema";
import { LinkMinOrderByAggregateInputObjectSchema } from "./LinkMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    link: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    thumbnail: z.lazy(() => SortOrderSchema).optional(),
    creatorUserId: z.lazy(() => SortOrderSchema).optional(),
    diveId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddyId: z.lazy(() => SortOrderSchema).optional(),
    diveCenterId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    diveSiteId: z.lazy(() => SortOrderSchema).optional(),
    equipmentUnitId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => LinkCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => LinkMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => LinkMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const LinkOrderByWithAggregationInputObjectSchema = Schema;
