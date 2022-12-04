import { z } from "zod";
import { DiveCreateManyUserInputObjectSchema } from "./DiveCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => DiveCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DiveCreateManyUserInputEnvelopeObjectSchema = Schema;
