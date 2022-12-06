import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCountOrderByAggregateInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    owned: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    manufacturer: z.lazy(() => SortOrderSchema).optional(),
    retailer: z.lazy(() => SortOrderSchema).optional(),
    purchaseDate: z.lazy(() => SortOrderSchema).optional(),
    serialNumber: z.lazy(() => SortOrderSchema).optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const EquipmentUnitCountOrderByAggregateInputObjectSchema = Schema;
