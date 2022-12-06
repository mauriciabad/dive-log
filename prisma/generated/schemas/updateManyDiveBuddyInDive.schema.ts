import { z } from "zod";
import { DiveBuddyInDiveUpdateManyMutationInputObjectSchema } from "./objects/DiveBuddyInDiveUpdateManyMutationInput.schema";
import { DiveBuddyInDiveWhereInputObjectSchema } from "./objects/DiveBuddyInDiveWhereInput.schema";

export const DiveBuddyInDiveUpdateManySchema = z.object({
  data: DiveBuddyInDiveUpdateManyMutationInputObjectSchema,
  where: DiveBuddyInDiveWhereInputObjectSchema.optional(),
});
