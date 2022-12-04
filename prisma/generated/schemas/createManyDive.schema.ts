import { z } from "zod";
import { DiveCreateManyInputObjectSchema } from "./objects/DiveCreateManyInput.schema";

export const DiveCreateManySchema = z.object({
  data: DiveCreateManyInputObjectSchema,
});
