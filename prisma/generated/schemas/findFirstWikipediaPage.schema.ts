import { z } from "zod";
import { WikipediaPageWhereInputObjectSchema } from "./objects/WikipediaPageWhereInput.schema";
import { WikipediaPageOrderByWithRelationInputObjectSchema } from "./objects/WikipediaPageOrderByWithRelationInput.schema";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./objects/WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageScalarFieldEnumSchema } from "./enums/WikipediaPageScalarFieldEnum.schema";

export const WikipediaPageFindFirstSchema = z.object({
  where: WikipediaPageWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WikipediaPageOrderByWithRelationInputObjectSchema,
      WikipediaPageOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: WikipediaPageWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(WikipediaPageScalarFieldEnumSchema).optional(),
});
