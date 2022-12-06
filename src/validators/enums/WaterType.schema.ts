import { z } from "zod";

export const WaterTypeSchema = z.enum(["FRESH", "SALT"]);
