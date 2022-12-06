import { z } from "zod";
import { WikipediaPageCreateManyInputObjectSchema } from "./objects/WikipediaPageCreateManyInput.schema";

export const WikipediaPageCreateManySchema = z.object({
  data: WikipediaPageCreateManyInputObjectSchema,
});
