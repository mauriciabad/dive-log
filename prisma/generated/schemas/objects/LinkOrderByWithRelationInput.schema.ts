import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema";
import { DiveOrderByWithRelationInputObjectSchema } from "./DiveOrderByWithRelationInput.schema";
import { DiveBuddyOrderByWithRelationInputObjectSchema } from "./DiveBuddyOrderByWithRelationInput.schema";
import { DiveCenterOrderByWithRelationInputObjectSchema } from "./DiveCenterOrderByWithRelationInput.schema";
import { DiveSiteOrderByWithRelationInputObjectSchema } from "./DiveSiteOrderByWithRelationInput.schema";
import { EquipmentUnitOrderByWithRelationInputObjectSchema } from "./EquipmentUnitOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    link: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    thumbnail: z.lazy(() => SortOrderSchema).optional(),
    creatorUser: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
    creatorUserId: z.lazy(() => SortOrderSchema).optional(),
    dive: z.lazy(() => DiveOrderByWithRelationInputObjectSchema).optional(),
    diveId: z.lazy(() => SortOrderSchema).optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyOrderByWithRelationInputObjectSchema)
      .optional(),
    diveBuddyId: z.lazy(() => SortOrderSchema).optional(),
    diveCenter: z
      .lazy(() => DiveCenterOrderByWithRelationInputObjectSchema)
      .optional(),
    diveCenterId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    diveSite: z
      .lazy(() => DiveSiteOrderByWithRelationInputObjectSchema)
      .optional(),
    diveSiteId: z.lazy(() => SortOrderSchema).optional(),
    EquipmentUnit: z
      .lazy(() => EquipmentUnitOrderByWithRelationInputObjectSchema)
      .optional(),
    equipmentUnitId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const LinkOrderByWithRelationInputObjectSchema = Schema;
