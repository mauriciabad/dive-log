import { z } from "zod";
import { DiveBuddyInDiveCreateInputObjectSchema } from "./objects/DiveBuddyInDiveCreateInput.schema";

export const DiveBuddyInDiveCreateOneSchema = z.object({
  data: DiveBuddyInDiveCreateInputObjectSchema,
});
