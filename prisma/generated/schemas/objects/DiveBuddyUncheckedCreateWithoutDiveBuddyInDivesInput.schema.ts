import { z } from "zod";
import { LinkUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInput> =
  z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      id: z.string().optional(),
      creatorUserId: z.string(),
      diveBuddyUserId: z.string().optional().nullable(),
      customName: z.string().optional().nullable(),
      customDescription: z.string().optional().nullable(),
      customImage: z.string().optional().nullable(),
      links: z
        .lazy(
          () => LinkUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema =
  Schema;
