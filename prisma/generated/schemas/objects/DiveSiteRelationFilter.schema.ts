import { z } from "zod";
import { DiveSiteWhereInputObjectSchema } from "./DiveSiteWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteRelationFilter> = z
  .object({
    is: z
      .lazy(() => DiveSiteWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DiveSiteWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DiveSiteRelationFilterObjectSchema = Schema;
