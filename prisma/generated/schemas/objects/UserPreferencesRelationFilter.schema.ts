import { z } from "zod";
import { UserPreferencesWhereInputObjectSchema } from "./UserPreferencesWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesRelationFilter> = z
  .object({
    is: z.lazy(() => UserPreferencesWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => UserPreferencesWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserPreferencesRelationFilterObjectSchema = Schema;
