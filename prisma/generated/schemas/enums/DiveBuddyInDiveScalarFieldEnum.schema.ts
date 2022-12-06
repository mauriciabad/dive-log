import { z } from "zod";

export const DiveBuddyInDiveScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "diveId",
  "diveBuddyId",
  "notes",
  "role",
]);
