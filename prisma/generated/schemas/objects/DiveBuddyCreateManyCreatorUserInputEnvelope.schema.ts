import { z } from "zod";
import { DiveBuddyCreateManyCreatorUserInputObjectSchema } from "./DiveBuddyCreateManyCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateManyCreatorUserInputEnvelope> = z
  .object({
    data: z.lazy(() => DiveBuddyCreateManyCreatorUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DiveBuddyCreateManyCreatorUserInputEnvelopeObjectSchema = Schema;
