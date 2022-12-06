import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";

export const DiveBuddyInDiveFindUniqueSchema = z.object({
  where: DiveBuddyInDiveWhereUniqueInputObjectSchema,
});
