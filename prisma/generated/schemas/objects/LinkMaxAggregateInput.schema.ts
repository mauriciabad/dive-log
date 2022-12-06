import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkMaxAggregateInputType> = z
  .object({
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    id: z.literal(true).optional(),
    link: z.literal(true).optional(),
    type: z.literal(true).optional(),
    title: z.literal(true).optional(),
    thumbnail: z.literal(true).optional(),
    creatorUserId: z.literal(true).optional(),
    diveId: z.literal(true).optional(),
    diveBuddyId: z.literal(true).optional(),
    diveCenterId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    diveSiteId: z.literal(true).optional(),
    equipmentUnitId: z.literal(true).optional(),
  })
  .strict();

export const LinkMaxAggregateInputObjectSchema = Schema;
