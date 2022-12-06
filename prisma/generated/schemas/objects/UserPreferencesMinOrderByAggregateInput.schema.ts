import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesMinOrderByAggregateInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    publicProfile: z.lazy(() => SortOrderSchema).optional(),
    lengthUnits: z.lazy(() => SortOrderSchema).optional(),
    weightUnits: z.lazy(() => SortOrderSchema).optional(),
    temperatureUnits: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserPreferencesMinOrderByAggregateInputObjectSchema = Schema;
