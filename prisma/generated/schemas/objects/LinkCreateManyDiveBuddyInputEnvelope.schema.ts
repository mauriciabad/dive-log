import { z } from "zod";
import { LinkCreateManyDiveBuddyInputObjectSchema } from "./LinkCreateManyDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyDiveBuddyInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyDiveBuddyInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyDiveBuddyInputEnvelopeObjectSchema = Schema;
