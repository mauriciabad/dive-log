import { z } from "zod";
import { LinkTypeSchema } from "../enums/LinkType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyDiveBuddyInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    link: z.string(),
    type: z.lazy(() => LinkTypeSchema),
    title: z.string().optional().nullable(),
    thumbnail: z.string().optional().nullable(),
    creatorUserId: z.string(),
    diveId: z.string().optional().nullable(),
    diveCenterId: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
    diveSiteId: z.string().optional().nullable(),
    equipmentUnitId: z.string().optional().nullable(),
  })
  .strict();

export const LinkCreateManyDiveBuddyInputObjectSchema = Schema;
