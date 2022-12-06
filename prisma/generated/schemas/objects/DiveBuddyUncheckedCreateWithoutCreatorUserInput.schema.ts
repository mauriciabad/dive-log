import { z } from "zod";
import { LinkUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUncheckedCreateWithoutCreatorUserInput> =
  z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      id: z.string().optional(),
      diveBuddyUserId: z.string().optional().nullable(),
      customName: z.string().optional().nullable(),
      customDescription: z.string().optional().nullable(),
      customImage: z.string().optional().nullable(),
      links: z
        .lazy(
          () => LinkUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema
        )
        .optional(),
      diveBuddyInDives: z
        .lazy(
          () =>
            DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveBuddyInputObjectSchema
        )
        .optional(),
    })
    .strict();

export const DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema =
  Schema;
