import { z } from "zod";
import { DiveCreateNestedManyWithoutOrganismsInputObjectSchema } from "./DiveCreateNestedManyWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional().nullable(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutOrganismsInputObjectSchema)
      .optional(),
  })
  .strict();

export const WikipediaPageCreateInputObjectSchema = Schema;
