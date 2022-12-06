import { z } from "zod";
import { DiveSiteWhereUniqueInputObjectSchema } from "./objects/DiveSiteWhereUniqueInput.schema";

export const DiveSiteDeleteOneSchema = z.object({
  where: DiveSiteWhereUniqueInputObjectSchema,
});
