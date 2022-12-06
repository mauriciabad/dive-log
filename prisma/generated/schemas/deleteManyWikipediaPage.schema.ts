import { z } from "zod";
import { WikipediaPageWhereInputObjectSchema } from "./objects/WikipediaPageWhereInput.schema";

export const WikipediaPageDeleteManySchema = z.object({
  where: WikipediaPageWhereInputObjectSchema.optional(),
});
