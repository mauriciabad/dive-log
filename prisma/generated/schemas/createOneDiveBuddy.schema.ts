import { z } from "zod";
import { DiveBuddyCreateInputObjectSchema } from "./objects/DiveBuddyCreateInput.schema";

export const DiveBuddyCreateOneSchema = z.object({
  data: DiveBuddyCreateInputObjectSchema,
});
