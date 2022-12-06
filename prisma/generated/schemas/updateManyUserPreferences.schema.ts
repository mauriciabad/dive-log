import { z } from "zod";
import { UserPreferencesUpdateManyMutationInputObjectSchema } from "./objects/UserPreferencesUpdateManyMutationInput.schema";
import { UserPreferencesWhereInputObjectSchema } from "./objects/UserPreferencesWhereInput.schema";

export const UserPreferencesUpdateManySchema = z.object({
  data: UserPreferencesUpdateManyMutationInputObjectSchema,
  where: UserPreferencesWhereInputObjectSchema.optional(),
});
