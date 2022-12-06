import { z } from "zod";
import { DiveSiteUpdateInputObjectSchema } from "./objects/DiveSiteUpdateInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";

export const DiveSiteUpdateOneSchema = z.object({
  data: DiveSiteUpdateInputObjectSchema,
  where: DiveSiteWhereUniqueInputObjectSchema,
});
