import { z } from "zod";
import { WikipediaPageWhereInputObjectSchema } from "./objects/WikipediaPageWhereInput.schema";
import { WikipediaPageOrderByWithAggregationInputObjectSchema } from "./objects/WikipediaPageOrderByWithAggregationInput.schema";
import { WikipediaPageScalarWhereWithAggregatesInputObjectSchema } from "./objects/WikipediaPageScalarWhereWithAggregatesInput.schema";
import { WikipediaPageScalarFieldEnumSchema } from "./enums/WikipediaPageScalarFieldEnum.schema";

export const WikipediaPageGroupBySchema = z.object({
  where: WikipediaPageWhereInputObjectSchema.optional(),
  orderBy: z.union([
    WikipediaPageOrderByWithAggregationInputObjectSchema,
    WikipediaPageOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: WikipediaPageScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(WikipediaPageScalarFieldEnumSchema),
});
