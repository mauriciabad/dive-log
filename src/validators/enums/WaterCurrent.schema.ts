import { z } from "zod";

export const WaterCurrentSchema = z.enum([
  "NONE",
  "SLIGHT",
  "STRONG",
  "RIPPING",
]);
