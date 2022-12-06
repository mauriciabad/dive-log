import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";

export const WikipediaPageDeleteOneSchema = z.object({
  where: WikipediaPageWhereUniqueInputObjectSchema,
});
