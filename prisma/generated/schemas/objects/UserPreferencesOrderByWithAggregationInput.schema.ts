import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserPreferencesCountOrderByAggregateInputObjectSchema } from "./UserPreferencesCountOrderByAggregateInput.schema";
import { UserPreferencesMaxOrderByAggregateInputObjectSchema } from "./UserPreferencesMaxOrderByAggregateInput.schema";
import { UserPreferencesMinOrderByAggregateInputObjectSchema } from "./UserPreferencesMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesOrderByWithAggregationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    publicProfile: z.lazy(() => SortOrderSchema).optional(),
    lengthUnits: z.lazy(() => SortOrderSchema).optional(),
    weightUnits: z.lazy(() => SortOrderSchema).optional(),
    temperatureUnits: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserPreferencesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserPreferencesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserPreferencesMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserPreferencesOrderByWithAggregationInputObjectSchema = Schema;
