import { z } from "zod";
import { DiveBuddyInDiveCreateManyDiveInputObjectSchema } from "./DiveBuddyInDiveCreateManyDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateManyDiveInputEnvelope> = z
  .object({
    data: z.lazy(() => DiveBuddyInDiveCreateManyDiveInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DiveBuddyInDiveCreateManyDiveInputEnvelopeObjectSchema = Schema;
