import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DiveOrderByWithRelationInputObjectSchema } from "./DiveOrderByWithRelationInput.schema";
import { DiveBuddyOrderByWithRelationInputObjectSchema } from "./DiveBuddyOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    dive: z.lazy(() => DiveOrderByWithRelationInputObjectSchema).optional(),
    diveId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyOrderByWithRelationInputObjectSchema)
      .optional(),
    diveBuddyId: z.lazy(() => SortOrderSchema).optional(),
    notes: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const DiveBuddyInDiveOrderByWithRelationInputObjectSchema = Schema;
