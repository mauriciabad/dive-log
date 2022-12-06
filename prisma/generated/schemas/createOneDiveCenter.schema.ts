import { z } from "zod";
import { DiveCenterCreateInputObjectSchema } from "./objects/DiveCenterCreateInput.schema";

export const DiveCenterCreateOneSchema = z.object({
  data: DiveCenterCreateInputObjectSchema,
});
