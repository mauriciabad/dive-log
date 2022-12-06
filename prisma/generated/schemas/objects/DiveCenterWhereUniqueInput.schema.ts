import { z } from "zod";
import { DiveCenterLatitudeLongitudeCompoundUniqueInputObjectSchema } from "./DiveCenterLatitudeLongitudeCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    latitude_longitude: z
      .lazy(() => DiveCenterLatitudeLongitudeCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveCenterWhereUniqueInputObjectSchema = Schema;
