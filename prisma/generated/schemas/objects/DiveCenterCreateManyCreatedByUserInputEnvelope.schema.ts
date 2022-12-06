import { z } from "zod";
import { DiveCenterCreateManyCreatedByUserInputObjectSchema } from "./DiveCenterCreateManyCreatedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateManyCreatedByUserInputEnvelope> =
  z
    .object({
      data: z
        .lazy(() => DiveCenterCreateManyCreatedByUserInputObjectSchema)
        .array(),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const DiveCenterCreateManyCreatedByUserInputEnvelopeObjectSchema =
  Schema;
