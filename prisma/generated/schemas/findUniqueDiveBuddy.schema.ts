import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./objects/DiveBuddyWhereUniqueInput.schema";

export const DiveBuddyFindUniqueSchema = z.object({
  where: DiveBuddyWhereUniqueInputObjectSchema,
});
