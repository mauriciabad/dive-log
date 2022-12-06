import { z } from "zod";
import { UserPreferencesCreateManyInputObjectSchema } from "./objects/UserPreferencesCreateManyInput.schema";

export const UserPreferencesCreateManySchema = z.object({
  data: UserPreferencesCreateManyInputObjectSchema,
});
