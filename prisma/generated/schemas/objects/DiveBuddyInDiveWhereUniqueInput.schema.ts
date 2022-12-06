import { z } from "zod";
import { DiveBuddyInDiveDiveIdDiveBuddyIdCompoundUniqueInputObjectSchema } from "./DiveBuddyInDiveDiveIdDiveBuddyIdCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveWhereUniqueInput> = z
  .object({
    diveId_diveBuddyId: z
      .lazy(
        () => DiveBuddyInDiveDiveIdDiveBuddyIdCompoundUniqueInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyInDiveWhereUniqueInputObjectSchema = Schema;
