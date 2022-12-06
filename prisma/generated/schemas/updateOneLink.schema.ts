import { z } from "zod";
import { LinkUpdateInputObjectSchema } from "./objects/LinkUpdateInput.schema";
import { LinkWhereUniqueInputObjectSchema } from "./objects/LinkWhereUniqueInput.schema";

export const LinkUpdateOneSchema = z.object({
  data: LinkUpdateInputObjectSchema,
  where: LinkWhereUniqueInputObjectSchema,
});
