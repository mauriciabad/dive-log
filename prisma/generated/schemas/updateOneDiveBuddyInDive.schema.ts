import { z } from "zod";
import { DiveBuddyInDiveUpdateInputObjectSchema } from "./objects/DiveBuddyInDiveUpdateInput.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";

export const DiveBuddyInDiveUpdateOneSchema = z.object({
  data: DiveBuddyInDiveUpdateInputObjectSchema,
  where: DiveBuddyInDiveWhereUniqueInputObjectSchema,
});
