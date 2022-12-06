import { z } from "zod";
import { UserCreateNestedOneWithoutDiveBuddyInputObjectSchema } from "./UserCreateNestedOneWithoutDiveBuddyInput.schema";
import { UserCreateNestedOneWithoutAsDiveBuddyInputObjectSchema } from "./UserCreateNestedOneWithoutAsDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateWithoutLinksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    creatorUser: z.lazy(
      () => UserCreateNestedOneWithoutDiveBuddyInputObjectSchema
    ),
    diveBuddyUser: z
      .lazy(() => UserCreateNestedOneWithoutAsDiveBuddyInputObjectSchema)
      .optional(),
    customName: z.string().optional().nullable(),
    customDescription: z.string().optional().nullable(),
    customImage: z.string().optional().nullable(),
    diveBuddyInDives: z
      .lazy(
        () => DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveBuddyCreateWithoutLinksInputObjectSchema = Schema;
