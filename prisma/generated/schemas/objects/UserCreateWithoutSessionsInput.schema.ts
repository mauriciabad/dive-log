import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { DiveCreateNestedManyWithoutUserInputObjectSchema } from "./DiveCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutSessionsInputObjectSchema = Schema;
