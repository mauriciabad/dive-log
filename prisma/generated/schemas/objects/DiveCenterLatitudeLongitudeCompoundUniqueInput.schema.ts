import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterLatitudeLongitudeCompoundUniqueInput> =
  z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .strict();

export const DiveCenterLatitudeLongitudeCompoundUniqueInputObjectSchema =
  Schema;
