import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutDivesInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutDivesInputObjectSchema = Schema;
