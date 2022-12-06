import { z } from "zod";
import { LinkWhereInputObjectSchema } from "./objects/LinkWhereInput.schema";
import { LinkOrderByWithRelationInputObjectSchema } from "./objects/LinkOrderByWithRelationInput.schema";
import { LinkWhereUniqueInputObjectSchema } from "./objects/LinkWhereUniqueInput.schema";
import { LinkScalarFieldEnumSchema } from "./enums/LinkScalarFieldEnum.schema";

export const LinkFindManySchema = z.object({
  where: LinkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LinkOrderByWithRelationInputObjectSchema,
      LinkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: LinkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(LinkScalarFieldEnumSchema).optional(),
});
