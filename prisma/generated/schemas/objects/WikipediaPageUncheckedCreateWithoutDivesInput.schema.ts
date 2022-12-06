import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUncheckedCreateWithoutDivesInput> =
  z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      id: z.number(),
      title: z.string(),
      description: z.string(),
      image: z.string().optional().nullable(),
    })
    .strict();

export const WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema = Schema;
