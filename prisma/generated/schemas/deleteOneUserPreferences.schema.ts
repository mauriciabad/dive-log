import { z } from "zod";
import { UserPreferencesWhereUniqueInputObjectSchema } from "./objects/UserPreferencesWhereUniqueInput.schema";

export const UserPreferencesDeleteOneSchema = z.object({
  where: UserPreferencesWhereUniqueInputObjectSchema,
});
