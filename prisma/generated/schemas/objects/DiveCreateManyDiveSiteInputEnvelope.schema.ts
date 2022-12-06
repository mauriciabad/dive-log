import { z } from "zod";
import { DiveCreateManyDiveSiteInputObjectSchema } from "./DiveCreateManyDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateManyDiveSiteInputEnvelope> = z
  .object({
    data: z.lazy(() => DiveCreateManyDiveSiteInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DiveCreateManyDiveSiteInputEnvelopeObjectSchema = Schema;
