import { z } from "zod";
import { UserCreateManyPreferencesInputObjectSchema } from "./UserCreateManyPreferencesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateManyPreferencesInputEnvelope> = z
  .object({
    data: z.lazy(() => UserCreateManyPreferencesInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyPreferencesInputEnvelopeObjectSchema = Schema;
