import { z } from "zod";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";
import { UserPreferencesCreateInputObjectSchema } from "./objects/UserPreferencesCreateInput.schema";
import { UserPreferencesUpdateInputObjectSchema } from "./objects/UserPreferencesUpdateInput.schema";

export const UserPreferencesUpsertSchema = z.object({
  where: UserPreferencesWhereUniqueInputObjectSchema,
  create: UserPreferencesCreateInputObjectSchema,
  update: UserPreferencesUpdateInputObjectSchema,
});
