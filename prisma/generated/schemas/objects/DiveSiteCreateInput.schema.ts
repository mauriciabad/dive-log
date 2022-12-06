import { z } from "zod";
import { LinkCreateNestedManyWithoutDiveSiteInputObjectSchema } from "./LinkCreateNestedManyWithoutDiveSiteInput.schema";
import { DiveCreateNestedManyWithoutDiveSiteInputObjectSchema } from "./DiveCreateNestedManyWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    links: z
      .lazy(() => LinkCreateNestedManyWithoutDiveSiteInputObjectSchema)
      .optional(),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutDiveSiteInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveSiteCreateInputObjectSchema = Schema;
