import { z } from "zod";

export const LinkTypeSchema = z.enum([
  "IMAGE",
  "VIDEO",
  "ALBUM",
  "PROFILE",
  "FILE",
  "WEBSITE",
  "TEXT",
  "OTHER",
]);
