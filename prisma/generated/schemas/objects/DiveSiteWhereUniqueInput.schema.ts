import { z } from "zod";
import { DiveSiteLatitudeLongitudeCompoundUniqueInputObjectSchema } from "./DiveSiteLatitudeLongitudeCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    latitude_longitude: z
      .lazy(() => DiveSiteLatitudeLongitudeCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveSiteWhereUniqueInputObjectSchema = Schema;
