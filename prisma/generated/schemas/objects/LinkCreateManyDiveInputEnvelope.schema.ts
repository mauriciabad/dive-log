import { z } from "zod";
import { LinkCreateManyDiveInputObjectSchema } from "./LinkCreateManyDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyDiveInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyDiveInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyDiveInputEnvelopeObjectSchema = Schema;
