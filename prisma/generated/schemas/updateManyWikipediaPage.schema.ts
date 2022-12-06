import { z } from "zod";
import { WikipediaPageUpdateManyMutationInputObjectSchema } from "./objects/WikipediaPageUpdateManyMutationInput.schema";
import { WikipediaPageWhereInputObjectSchema } from "./objects/WikipediaPageWhereInput.schema";

export const WikipediaPageUpdateManySchema = z.object({
  data: WikipediaPageUpdateManyMutationInputObjectSchema,
  where: WikipediaPageWhereInputObjectSchema.optional(),
});
