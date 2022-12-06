import { z } from "zod";

export const DiveSiteScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "name",
  "description",
  "image",
  "latitude",
  "longitude",
]);
