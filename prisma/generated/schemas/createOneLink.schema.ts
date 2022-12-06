import { z } from "zod";
import { LinkCreateInputObjectSchema } from "./objects/LinkCreateInput.schema";

export const LinkCreateOneSchema = z.object({
  data: LinkCreateInputObjectSchema,
});
