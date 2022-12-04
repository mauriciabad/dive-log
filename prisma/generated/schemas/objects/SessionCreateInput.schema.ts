import { z } from "zod";
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from "./UserCreateNestedOneWithoutSessionsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    expires: z.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict();

export const SessionCreateInputObjectSchema = Schema;
