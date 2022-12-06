import { z } from "zod";
import { DiveSiteCreateInputObjectSchema } from "./objects/DiveSiteCreateInput.schema";

export const DiveSiteCreateOneSchema = z.object({
  data: DiveSiteCreateInputObjectSchema,
});
