import { z } from "zod";

export const DiveScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "userId",
  "date",
  "maxDepth",
  "waterTemp",
  "locationName",
]);
