import { z } from "zod";
import { DiveBuddyCreateManyInputObjectSchema } from "./objects/DiveBuddyCreateManyInput.schema";

export const DiveBuddyCreateManySchema = z.object({
  data: DiveBuddyCreateManyInputObjectSchema,
});
