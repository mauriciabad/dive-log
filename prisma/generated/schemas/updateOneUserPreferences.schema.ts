import { z } from "zod";
import { UserPreferencesUpdateInputObjectSchema } from "./objects/UserPreferencesUpdateInput.schema";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";

export const UserPreferencesUpdateOneSchema = z.object({
  data: UserPreferencesUpdateInputObjectSchema,
  where: UserPreferencesWhereUniqueInputObjectSchema,
});
