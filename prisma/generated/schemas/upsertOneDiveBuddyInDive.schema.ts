import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveCreateInputObjectSchema } from "./objects/DiveBuddyInDiveCreateInput.schema";
import { DiveBuddyInDiveUpdateInputObjectSchema } from "./objects/DiveBuddyInDiveUpdateInput.schema";

export const DiveBuddyInDiveUpsertSchema = z.object({
  where: DiveBuddyInDiveWhereUniqueInputObjectSchema,
  create: DiveBuddyInDiveCreateInputObjectSchema,
  update: DiveBuddyInDiveUpdateInputObjectSchema,
});
