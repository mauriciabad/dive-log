import { z } from "zod";
import { LinkTypeSchema } from "../enums/LinkType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumLinkTypeFilter> = z
  .object({
    equals: z.lazy(() => LinkTypeSchema).optional(),
    in: z
      .lazy(() => LinkTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => LinkTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => LinkTypeSchema),
        z.lazy(() => NestedEnumLinkTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumLinkTypeFilterObjectSchema = Schema;
