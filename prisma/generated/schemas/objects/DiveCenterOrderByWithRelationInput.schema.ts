import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { LinkOrderByRelationAggregateInputObjectSchema } from "./LinkOrderByRelationAggregateInput.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { DiveOrderByRelationAggregateInputObjectSchema } from "./DiveOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    latitude: z.lazy(() => SortOrderSchema).optional(),
    longitude: z.lazy(() => SortOrderSchema).optional(),
    links: z
      .lazy(() => LinkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdByUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    createdByUserId: z.lazy(() => SortOrderSchema).optional(),
    dives: z
      .lazy(() => DiveOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveCenterOrderByWithRelationInputObjectSchema = Schema;
