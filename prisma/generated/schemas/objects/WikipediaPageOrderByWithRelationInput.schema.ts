import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveOrderByRelationAggregateInputObjectSchema } from "./DiveOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    dives: z
      .lazy(() => DiveOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const WikipediaPageOrderByWithRelationInputObjectSchema = Schema;
