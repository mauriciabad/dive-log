import { z } from "zod";

export const UserPreferencesScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "publicProfile",
  "lengthUnits",
  "weightUnits",
  "temperatureUnits",
]);
