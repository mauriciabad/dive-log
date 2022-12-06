import { z } from "zod";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";

export const UserPreferencesFindUniqueSchema = z.object({
  where: UserPreferencesWhereUniqueInputObjectSchema,
});
