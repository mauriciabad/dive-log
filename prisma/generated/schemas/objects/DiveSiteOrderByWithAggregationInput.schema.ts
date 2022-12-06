import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveSiteCountOrderByAggregateInputObjectSchema } from "./DiveSiteCountOrderByAggregateInput.schema";
import { DiveSiteAvgOrderByAggregateInputObjectSchema } from "./DiveSiteAvgOrderByAggregateInput.schema";
import { DiveSiteMaxOrderByAggregateInputObjectSchema } from "./DiveSiteMaxOrderByAggregateInput.schema";
import { DiveSiteMinOrderByAggregateInputObjectSchema } from "./DiveSiteMinOrderByAggregateInput.schema";
import { DiveSiteSumOrderByAggregateInputObjectSchema } from "./DiveSiteSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DiveSiteCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => DiveSiteAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DiveSiteMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DiveSiteMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DiveSiteSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DiveSiteOrderByWithAggregationInputObjectSchema = Schema;
