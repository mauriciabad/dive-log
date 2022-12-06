import { z } from "zod";
import { WikipediaPageUpdateInputObjectSchema } from "./objects/WikipediaPageUpdateInput.schema";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";

export const WikipediaPageUpdateOneSchema = z.object({
  data: WikipediaPageUpdateInputObjectSchema,
  where: WikipediaPageWhereUniqueInputObjectSchema,
});
