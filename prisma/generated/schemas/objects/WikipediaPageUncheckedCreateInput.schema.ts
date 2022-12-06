import { z } from "zod";
import { DiveUncheckedCreateNestedManyWithoutOrganismsInputObjectSchema } from "./DiveUncheckedCreateNestedManyWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUncheckedCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional().nullable(),
    dives: z
      .lazy(
        () => DiveUncheckedCreateNestedManyWithoutOrganismsInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const WikipediaPageUncheckedCreateInputObjectSchema = Schema;
