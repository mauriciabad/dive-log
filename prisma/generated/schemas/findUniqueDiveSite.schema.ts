import { z } from "zod";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";

export const DiveSiteFindUniqueSchema = z.object({
  where: DiveSiteWhereUniqueInputObjectSchema,
});
