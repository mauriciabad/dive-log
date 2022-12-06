import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { LinkOrderByRelationAggregateInputObjectSchema } from "./LinkOrderByRelationAggregateInput.schema";
import { DiveOrderByRelationAggregateInputObjectSchema } from "./DiveOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    owned: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    manufacturer: z.lazy(() => SortOrderSchema).optional(),
    retailer: z.lazy(() => SortOrderSchema).optional(),
    purchaseDate: z.lazy(() => SortOrderSchema).optional(),
    serialNumber: z.lazy(() => SortOrderSchema).optional(),
    links: z
      .lazy(() => LinkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    note: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    dives: z
      .lazy(() => DiveOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EquipmentUnitOrderByWithRelationInputObjectSchema = Schema;
