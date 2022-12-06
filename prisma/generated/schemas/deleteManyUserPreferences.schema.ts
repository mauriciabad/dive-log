import { z } from "zod";
import { UserPreferencesWhereInputObjectSchema } from "./objects/UserPreferencesWhereInput.schema";

export const UserPreferencesDeleteManySchema = z.object({
  where: UserPreferencesWhereInputObjectSchema.optional(),
});
