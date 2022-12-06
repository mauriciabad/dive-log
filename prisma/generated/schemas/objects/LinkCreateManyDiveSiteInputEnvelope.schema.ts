import { z } from "zod";
import { LinkCreateManyDiveSiteInputObjectSchema } from "./LinkCreateManyDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyDiveSiteInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyDiveSiteInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyDiveSiteInputEnvelopeObjectSchema = Schema;
