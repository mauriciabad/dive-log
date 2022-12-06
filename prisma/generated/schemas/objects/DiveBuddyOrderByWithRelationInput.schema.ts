import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { LinkOrderByRelationAggregateInputObjectSchema } from "./LinkOrderByRelationAggregateInput.schema";
import { DiveBuddyInDiveOrderByRelationAggregateInputObjectSchema } from "./DiveBuddyInDiveOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    creatorUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    creatorUserId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddyUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    diveBuddyUserId: z.lazy(() => SortOrderSchema).optional(),
    customName: z.lazy(() => SortOrderSchema).optional(),
    customDescription: z.lazy(() => SortOrderSchema).optional(),
    customImage: z.lazy(() => SortOrderSchema).optional(),
    links: z
      .lazy(() => LinkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    diveBuddyInDives: z
      .lazy(() => DiveBuddyInDiveOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveBuddyOrderByWithRelationInputObjectSchema = Schema;
