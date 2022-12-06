import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCreateInputObjectSchema } from "./objects/DiveBuddyCreateInput.schema";
import { DiveBuddyUpdateInputObjectSchema } from "./objects/DiveBuddyUpdateInput.schema";

export const DiveBuddyUpsertSchema = z.object({
  where: DiveBuddyWhereUniqueInputObjectSchema,
  create: DiveBuddyCreateInputObjectSchema,
  update: DiveBuddyUpdateInputObjectSchema,
});
