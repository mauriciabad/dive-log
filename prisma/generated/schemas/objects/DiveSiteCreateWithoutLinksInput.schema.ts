import { z } from "zod";
import { DiveCreateNestedManyWithoutDiveSiteInputObjectSchema } from "./DiveCreateNestedManyWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateWithoutLinksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutDiveSiteInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveSiteCreateWithoutLinksInputObjectSchema = Schema;
