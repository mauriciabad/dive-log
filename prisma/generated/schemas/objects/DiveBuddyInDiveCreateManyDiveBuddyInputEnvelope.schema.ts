import { z } from "zod";
import { DiveBuddyInDiveCreateManyDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateManyDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateManyDiveBuddyInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => DiveBuddyInDiveCreateManyDiveBuddyInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DiveBuddyInDiveCreateManyDiveBuddyInputEnvelopeObjectSchema =
  Schema;
