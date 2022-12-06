import { z } from "zod";
import { DiveBuddyUpdateManyMutationInputObjectSchema } from "./objects/DiveBuddyUpdateManyMutationInput.schema";
import { DiveBuddyWhereInputObjectSchema } from "./objects/DiveBuddyWhereInput.schema";

export const DiveBuddyUpdateManySchema = z.object({
  data: DiveBuddyUpdateManyMutationInputObjectSchema,
  where: DiveBuddyWhereInputObjectSchema.optional(),
});
