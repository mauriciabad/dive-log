import { z } from "zod";
import { UserPreferencesWhereInputObjectSchema } from "./objects/UserPreferencesWhereInput.schema";
import { UserPreferencesOrderByWithAggregationInputObjectSchema } from "./objects/UserPreferencesOrderByWithAggregationInput.schema";
import { UserPreferencesScalarWhereWithAggregatesInputObjectSchema } from "./objects/UserPreferencesScalarWhereWithAggregatesInput.schema";
import { UserPreferencesScalarFieldEnumSchema } from "./enums/UserPreferencesScalarFieldEnum.schema";

export const UserPreferencesGroupBySchema = z.object({
  where: UserPreferencesWhereInputObjectSchema.optional(),
  orderBy: z.union([
    UserPreferencesOrderByWithAggregationInputObjectSchema,
    UserPreferencesOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: UserPreferencesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserPreferencesScalarFieldEnumSchema),
});
