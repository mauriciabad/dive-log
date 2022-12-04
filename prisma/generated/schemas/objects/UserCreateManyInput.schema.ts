import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
