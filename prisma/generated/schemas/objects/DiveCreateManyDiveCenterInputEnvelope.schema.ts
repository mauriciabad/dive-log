import { z } from "zod";
import { DiveCreateManyDiveCenterInputObjectSchema } from "./DiveCreateManyDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateManyDiveCenterInputEnvelope> = z
  .object({
    data: z.lazy(() => DiveCreateManyDiveCenterInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const DiveCreateManyDiveCenterInputEnvelopeObjectSchema = Schema;
