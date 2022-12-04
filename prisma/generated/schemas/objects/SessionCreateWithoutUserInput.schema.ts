import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
  })
  .strict();

export const SessionCreateWithoutUserInputObjectSchema = Schema;
