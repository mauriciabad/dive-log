import { z } from "zod";
import { DiveSiteWhereInputObjectSchema } from "./objects/DiveSiteWhereInput.schema";
import { DiveSiteOrderByWithRelationInputObjectSchema } from "./objects/DiveSiteOrderByWithRelationInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";
import { DiveSiteScalarFieldEnumSchema } from "./enums/DiveSiteScalarFieldEnum.schema";

export const DiveSiteFindFirstSchema = z.object({
  where: DiveSiteWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiveSiteOrderByWithRelationInputObjectSchema,
      DiveSiteOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: DiveSiteWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiveSiteScalarFieldEnumSchema).optional(),
});
