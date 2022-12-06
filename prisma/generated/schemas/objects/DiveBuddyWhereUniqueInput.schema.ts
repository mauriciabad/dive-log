import { z } from "zod";
import { DiveBuddyDiveBuddyUserIdCreatorUserIdCompoundUniqueInputObjectSchema } from "./DiveBuddyDiveBuddyUserIdCreatorUserIdCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    diveBuddyUserId_creatorUserId: z
      .lazy(
        () =>
          DiveBuddyDiveBuddyUserIdCreatorUserIdCompoundUniqueInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyWhereUniqueInputObjectSchema = Schema;
