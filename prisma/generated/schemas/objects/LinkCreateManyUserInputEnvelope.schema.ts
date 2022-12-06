import { z } from "zod";
import { LinkCreateManyUserInputObjectSchema } from "./LinkCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyUserInputEnvelopeObjectSchema = Schema;
