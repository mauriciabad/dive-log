import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkMaxOrderByAggregateInput> = z
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
  })
  .strict();

export const LinkMaxOrderByAggregateInputObjectSchema = Schema;
