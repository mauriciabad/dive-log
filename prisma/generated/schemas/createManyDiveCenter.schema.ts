import { z } from "zod";
import { DiveCenterCreateManyInputObjectSchema } from "./objects/DiveCenterCreateManyInput.schema";

export const DiveCenterCreateManySchema = z.object({
  data: DiveCenterCreateManyInputObjectSchema,
});
