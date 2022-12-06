import { z } from "zod";
import { UserCreateNestedOneWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateNestedOneWithoutAsDiveBuddyInput.schema";
import { LinkCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./LinkCreateNestedManyWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateWithoutCreatorUserInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    diveBuddyUser: z
      .lazy(() => UserCreateNestedOneWithoutAsDiveBuddyInputObjectSchema)
      .optional(),
    customName: z.string().optional().nullable(),
    customDescription: z.string().optional().nullable(),
    customImage: z.string().optional().nullable(),
    links: z
      .lazy(() => LinkCreateNestedManyWithoutDiveBuddyInputObjectSchema)
      .optional(),
    diveBuddyInDives: z
      .lazy(
        () => DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyCreateWithoutCreatorUserInputObjectSchema = Schema;
