import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveDiveNumberUserIdCompoundUniqueInput> = z
  .object({
    diveNumber: z.number(),
    userId: z.string(),
  })
  .strict();

export const DiveDiveNumberUserIdCompoundUniqueInputObjectSchema = Schema;
