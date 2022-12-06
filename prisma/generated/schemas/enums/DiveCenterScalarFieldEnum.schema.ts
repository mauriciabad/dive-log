import { z } from "zod";

export const DiveCenterScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "name",
  "description",
  "image",
  "latitude",
  "longitude",
  "createdByUserId",
]);
