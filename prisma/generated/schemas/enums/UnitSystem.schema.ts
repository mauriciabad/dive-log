import { z } from "zod";

export const UnitSystemSchema = z.enum(["METRIC", "IMPERIAL"]);
