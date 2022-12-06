import { z } from "zod";
import { UserPreferencesWhereInputObjectSchema } from "./objects/UserPreferencesWhereInput.schema";
import { UserPreferencesOrderByWithRelationInputObjectSchema } from "./objects/UserPreferencesOrderByWithRelationInput.schema";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";
import { UserPreferencesScalarFieldEnumSchema } from "./enums/UserPreferencesScalarFieldEnum.schema";

export const UserPreferencesFindFirstSchema = z.object({
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
  distinct: z.array(UserPreferencesScalarFieldEnumSchema).optional(),
});
