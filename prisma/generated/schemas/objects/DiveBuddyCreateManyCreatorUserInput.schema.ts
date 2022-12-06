import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateManyCreatorUserInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    diveBuddyUserId: z.string().optional().nullable(),
    customName: z.string().optional().nullable(),
    customDescription: z.string().optional().nullable(),
    customImage: z.string().optional().nullable(),
  })
  .strict();

export const DiveBuddyCreateManyCreatorUserInputObjectSchema = Schema;
