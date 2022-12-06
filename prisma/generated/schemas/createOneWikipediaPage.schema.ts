import { z } from "zod";
import { WikipediaPageCreateInputObjectSchema } from "./objects/WikipediaPageCreateInput.schema";

export const WikipediaPageCreateOneSchema = z.object({
  data: WikipediaPageCreateInputObjectSchema,
});
