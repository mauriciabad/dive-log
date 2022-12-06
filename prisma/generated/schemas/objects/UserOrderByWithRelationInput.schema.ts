import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AccountOrderByRelationAggregateInputObjectSchema } from "./AccountOrderByRelationAggregateInput.schema";
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema";
import { UserPreferencesOrderByWithRelationInputObjectSchema } from "./UserPreferencesOrderByWithRelationInput.schema";
import { DiveOrderByRelationAggregateInputObjectSchema } from "./DiveOrderByRelationAggregateInput.schema";
import { DiveBuddyOrderByRelationAggregateInputObjectSchema } from "./DiveBuddyOrderByRelationAggregateInput.schema";
import { EquipmentUnitOrderByRelationAggregateInputObjectSchema } from "./EquipmentUnitOrderByRelationAggregateInput.schema";
import { DiveCenterOrderByRelationAggregateInputObjectSchema } from "./DiveCenterOrderByRelationAggregateInput.schema";
import { LinkOrderByRelationAggregateInputObjectSchema } from "./LinkOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    preferences: z
      .lazy(() => UserPreferencesOrderByWithRelationInputObjectSchema)
      .optional(),
    userPreferencesId: z.lazy(() => SortOrderSchema).optional(),
    handle: z.lazy(() => SortOrderSchema).optional(),
    dives: z
      .lazy(() => DiveOrderByRelationAggregateInputObjectSchema)
      .optional(),
    asDiveBuddy: z
      .lazy(() => DiveBuddyOrderByRelationAggregateInputObjectSchema)
      .optional(),
    equipment: z
      .lazy(() => EquipmentUnitOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdDiveCenters: z
      .lazy(() => DiveCenterOrderByRelationAggregateInputObjectSchema)
      .optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyOrderByRelationAggregateInputObjectSchema)
      .optional(),
    links: z
      .lazy(() => LinkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdLinks: z
      .lazy(() => LinkOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
