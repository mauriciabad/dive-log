import { z } from "zod";
import { DiveUncheckedCreateNestedManyWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedCreateNestedManyWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUncheckedCreateWithoutLinksInput> = z
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
      .lazy(() => DiveUncheckedCreateNestedManyWithoutDiveSiteInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveSiteUncheckedCreateWithoutLinksInputObjectSchema = Schema;
