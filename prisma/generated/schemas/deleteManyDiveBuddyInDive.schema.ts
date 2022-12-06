import { z } from "zod";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./objects/DiveBuddyInDiveWhereInput.schema";

export const DiveBuddyInDiveDeleteManySchema = z.object({
  where: DiveBuddyInDiveWhereInputObjectSchema.optional(),
});
