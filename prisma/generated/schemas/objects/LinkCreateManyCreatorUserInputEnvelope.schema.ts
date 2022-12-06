import { z } from "zod";
import { LinkCreateManyCreatorUserInputObjectSchema } from "./LinkCreateManyCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyCreatorUserInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyCreatorUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyCreatorUserInputEnvelopeObjectSchema = Schema;
