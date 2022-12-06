import { z } from "zod";

export const WikipediaPageScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "title",
  "description",
  "image",
]);
