import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateManyDiveBuddyUserInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    creatorUserId: z.string(),
    customName: z.string().optional().nullable(),
    customDescription: z.string().optional().nullable(),
    customImage: z.string().optional().nullable(),
  })
  .strict();

export const DiveBuddyCreateManyDiveBuddyUserInputObjectSchema = Schema;
