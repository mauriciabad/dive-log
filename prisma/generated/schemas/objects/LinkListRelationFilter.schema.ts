import { z } from "zod";
import { LinkWhereInputObjectSchema } from "./LinkWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkListRelationFilter> = z
  .object({
    every: z.lazy(() => LinkWhereInputObjectSchema).optional(),
    some: z.lazy(() => LinkWhereInputObjectSchema).optional(),
    none: z.lazy(() => LinkWhereInputObjectSchema).optional(),
  })
  .strict();

export const LinkListRelationFilterObjectSchema = Schema;
