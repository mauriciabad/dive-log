import { z } from "zod";
import { DiveBuddyUpdateInputObjectSchema } from "./objects/DiveBuddyUpdateInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";

export const DiveBuddyUpdateOneSchema = z.object({
  data: DiveBuddyUpdateInputObjectSchema,
  where: DiveBuddyWhereUniqueInputObjectSchema,
});
