import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyDiveBuddyUserIdCreatorUserIdCompoundUniqueInput> =
  z
    .object({
      diveBuddyUserId: z.string(),
      creatorUserId: z.string(),
    })
    .strict();

export const DiveBuddyDiveBuddyUserIdCreatorUserIdCompoundUniqueInputObjectSchema =
  Schema;
