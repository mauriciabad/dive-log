import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./objects/LinkWhereUniqueInput.schema";
import { LinkCreateInputObjectSchema } from "./objects/LinkCreateInput.schema";
import { LinkUpdateInputObjectSchema } from "./objects/LinkUpdateInput.schema";

export const LinkUpsertSchema = z.object({
  where: LinkWhereUniqueInputObjectSchema,
  create: LinkCreateInputObjectSchema,
  update: LinkUpdateInputObjectSchema,
});
