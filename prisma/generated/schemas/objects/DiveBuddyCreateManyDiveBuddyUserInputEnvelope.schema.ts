import { z } from "zod";
import { DiveBuddyCreateManyDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateManyDiveBuddyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateManyDiveBuddyUserInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => DiveBuddyCreateManyDiveBuddyUserInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DiveBuddyCreateManyDiveBuddyUserInputEnvelopeObjectSchema = Schema;
