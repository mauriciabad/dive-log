import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteLatitudeLongitudeCompoundUniqueInput> = z
  .object({
    latitude: z.number(),
    longitude: z.number(),
  })
  .strict();

export const DiveSiteLatitudeLongitudeCompoundUniqueInputObjectSchema = Schema;
