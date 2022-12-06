import { z } from "zod";

export const UserScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "name",
  "email",
  "emailVerified",
  "image",
  "userPreferencesId",
  "handle",
]);
