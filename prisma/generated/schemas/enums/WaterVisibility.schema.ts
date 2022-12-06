import { z } from "zod";

export const WaterVisibilitySchema = z.enum([
  "BAD",
  "MEDIUM",
  "GOOD",
  "PERFECT",
]);
