import { z } from "zod";
import { DiveCenterWhereInputObjectSchema } from "./DiveCenterWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterRelationFilter> = z
  .object({
    is: z
      .lazy(() => DiveCenterWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DiveCenterWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DiveCenterRelationFilterObjectSchema = Schema;
