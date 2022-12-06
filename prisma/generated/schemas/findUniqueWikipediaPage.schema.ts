import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";

export const WikipediaPageFindUniqueSchema = z.object({
  where: WikipediaPageWhereUniqueInputObjectSchema,
});
