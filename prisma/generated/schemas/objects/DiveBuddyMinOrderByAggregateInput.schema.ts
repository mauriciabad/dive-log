import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyMinOrderByAggregateInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    creatorUserId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddyUserId: z.lazy(() => SortOrderSchema).optional(),
    customName: z.lazy(() => SortOrderSchema).optional(),
    customDescription: z.lazy(() => SortOrderSchema).optional(),
    customImage: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveBuddyMinOrderByAggregateInputObjectSchema = Schema;
