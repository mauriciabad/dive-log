import { z } from "zod";
import { DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedCreateWithoutLinksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    creatorUserId: z.string(),
    diveBuddyUserId: z.string().optional().nullable(),
    customName: z.string().optional().nullable(),
    customDescription: z.string().optional().nullable(),
    customImage: z.string().optional().nullable(),
    diveBuddyInDives: z
      .lazy(
        () =>
          DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema = Schema;
