import { z } from "zod";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { DiveUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./DiveUncheckedCreateNestedManyWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    dives: z
      .lazy(() => DiveUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema;
