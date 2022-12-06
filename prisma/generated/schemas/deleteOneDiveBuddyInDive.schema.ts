import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./objects/DiveBuddyInDiveWhereUniqueInput.schema";

export const DiveBuddyInDiveDeleteOneSchema = z.object({
  where: DiveBuddyInDiveWhereUniqueInputObjectSchema,
});
