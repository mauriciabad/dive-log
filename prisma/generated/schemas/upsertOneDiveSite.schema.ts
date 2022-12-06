import { z } from "zod";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";
import { DiveSiteCreateInputObjectSchema } from "./objects/DiveSiteCreateInput.schema";
import { DiveSiteUpdateInputObjectSchema } from "./objects/DiveSiteUpdateInput.schema";

export const DiveSiteUpsertSchema = z.object({
  where: DiveSiteWhereUniqueInputObjectSchema,
  create: DiveSiteCreateInputObjectSchema,
  update: DiveSiteUpdateInputObjectSchema,
});
