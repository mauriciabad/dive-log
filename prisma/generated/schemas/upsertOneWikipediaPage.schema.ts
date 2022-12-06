import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageCreateInputObjectSchema } from "./objects/WikipediaPageCreateInput.schema";
import { WikipediaPageUpdateInputObjectSchema } from "./objects/WikipediaPageUpdateInput.schema";

export const WikipediaPageUpsertSchema = z.object({
  where: WikipediaPageWhereUniqueInputObjectSchema,
  create: WikipediaPageCreateInputObjectSchema,
  update: WikipediaPageUpdateInputObjectSchema,
});
