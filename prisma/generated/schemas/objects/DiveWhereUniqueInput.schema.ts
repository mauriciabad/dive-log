import { z } from "zod";
import { DiveDiveNumberUserIdCompoundUniqueInputObjectSchema } from "./DiveDiveNumberUserIdCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    diveNumber_userId: z
      .lazy(() => DiveDiveNumberUserIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveWhereUniqueInputObjectSchema = Schema;
