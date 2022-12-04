import { z } from "zod";
import { SessionWhereInputObjectSchema } from "./objects/SessionWhereInput.schema";
import { SessionOrderByWithRelationInputObjectSchema } from "./objects/SessionOrderByWithRelationInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";
import { SessionScalarFieldEnumSchema } from "./enums/SessionScalarFieldEnum.schema";

export const SessionFindManySchema = z.object({
  where: SessionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SessionOrderByWithRelationInputObjectSchema,
      SessionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: SessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SessionScalarFieldEnumSchema).optional(),
});
