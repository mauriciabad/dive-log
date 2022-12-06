import { z } from "zod";
import { UserPreferencesCreateInputObjectSchema } from "./objects/UserPreferencesCreateInput.schema";

export const UserPreferencesCreateOneSchema = z.object({
  data: UserPreferencesCreateInputObjectSchema,
});
