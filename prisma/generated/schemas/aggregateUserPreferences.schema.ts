import { z } from "zod";
import { UserPreferencesWhereInputObjectSchema } from "./objects/UserPreferencesWhereInput.schema";
import { UserPreferencesOrderByWithRelationInputObjectSchema } from "./objects/UserPreferencesOrderByWithRelationInput.schema";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";
import { UserPreferencesCountAggregateInputObjectSchema } from "./objects/UserPreferencesCountAggregateInput.schema";
import { UserPreferencesMinAggregateInputObjectSchema } from "./objects/UserPreferencesMinAggregateInput.schema";
import { UserPreferencesMaxAggregateInputObjectSchema } from "./objects/UserPreferencesMaxAggregateInput.schema";

export const UserPreferencesAggregateSchema = z.object({
  where: UserPreferencesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserPreferencesOrderByWithRelationInputObjectSchema,
      UserPreferencesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: UserPreferencesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UserPreferencesCountAggregateInputObjectSchema])
    .optional(),
  _min: UserPreferencesMinAggregateInputObjectSchema.optional(),
  _max: UserPreferencesMaxAggregateInputObjectSchema.optional(),
});
