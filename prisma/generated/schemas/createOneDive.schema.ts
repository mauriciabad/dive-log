import { z } from "zod";
import { DiveCreateInputObjectSchema } from "./objects/DiveCreateInput.schema";

export const DiveCreateOneSchema = z.object({
  data: DiveCreateInputObjectSchema,
});
