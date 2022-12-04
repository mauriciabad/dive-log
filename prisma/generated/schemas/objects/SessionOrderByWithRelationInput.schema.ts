import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sessionToken: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    expires: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SessionOrderByWithRelationInputObjectSchema = Schema;
