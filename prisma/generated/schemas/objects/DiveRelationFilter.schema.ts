import { z } from "zod";
import { DiveWhereInputObjectSchema } from "./DiveWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveRelationFilter> = z
  .object({
    is: z
      .lazy(() => DiveWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DiveWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const DiveRelationFilterObjectSchema = Schema;
