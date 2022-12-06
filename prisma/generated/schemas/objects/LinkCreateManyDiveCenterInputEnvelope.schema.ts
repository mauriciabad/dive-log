import { z } from "zod";
import { LinkCreateManyDiveCenterInputObjectSchema } from "./LinkCreateManyDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyDiveCenterInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyDiveCenterInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyDiveCenterInputEnvelopeObjectSchema = Schema;
