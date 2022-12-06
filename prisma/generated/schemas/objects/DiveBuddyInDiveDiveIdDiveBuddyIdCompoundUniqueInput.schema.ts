import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveDiveIdDiveBuddyIdCompoundUniqueInput> =
  z
    .object({
      diveId: z.string(),
      diveBuddyId: z.string(),
    })
    .strict();

export const DiveBuddyInDiveDiveIdDiveBuddyIdCompoundUniqueInputObjectSchema =
  Schema;
