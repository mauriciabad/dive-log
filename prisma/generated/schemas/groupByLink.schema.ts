import { z } from "zod";
import { LinkWhereInputObjectSchema } from "./objects/LinkWhereInput.schema";
import { LinkOrderByWithAggregationInputObjectSchema } from "./objects/LinkOrderByWithAggregationInput.schema";
import { LinkScalarWhereWithAggregatesInputObjectSchema } from "./objects/LinkScalarWhereWithAggregatesInput.schema";
import { LinkScalarFieldEnumSchema } from "./enums/LinkScalarFieldEnum.schema";

export const LinkGroupBySchema = z.object({
  where: LinkWhereInputObjectSchema.optional(),
  orderBy: z.union([
    LinkOrderByWithAggregationInputObjectSchema,
    LinkOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: LinkScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LinkScalarFieldEnumSchema),
});
