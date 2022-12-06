import { z } from "zod";
import { DiveSiteCreateManyInputObjectSchema } from "./objects/DiveSiteCreateManyInput.schema";

export const DiveSiteCreateManySchema = z.object({
  data: DiveSiteCreateManyInputObjectSchema,
});
