import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";

export const DiveBuddyDeleteOneSchema = z.object({
  where: DiveBuddyWhereUniqueInputObjectSchema,
});
