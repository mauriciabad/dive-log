import { z } from "zod";

export const DiveBuddyScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "creatorUserId",
  "diveBuddyUserId",
  "customName",
  "customDescription",
  "customImage",
]);
