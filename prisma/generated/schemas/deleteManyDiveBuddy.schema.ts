import { z } from "zod";
import { DiveBuddyWhereInputObjectSchema } from "./objects/DiveBuddyWhereInput.schema";

export const DiveBuddyDeleteManySchema = z.object({
  where: DiveBuddyWhereInputObjectSchema.optional(),
});
