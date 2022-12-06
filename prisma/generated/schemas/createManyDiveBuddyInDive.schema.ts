import { z } from "zod";
import { DiveBuddyInDiveCreateManyInputObjectSchema } from "./objects/DiveBuddyInDiveCreateManyInput.schema";

export const DiveBuddyInDiveCreateManySchema = z.object({
  data: DiveBuddyInDiveCreateManyInputObjectSchema,
});
