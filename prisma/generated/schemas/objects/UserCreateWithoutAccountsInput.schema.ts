import { z } from "zod";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { DiveCreateNestedManyWithoutUserInputObjectSchema } from "./DiveCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
