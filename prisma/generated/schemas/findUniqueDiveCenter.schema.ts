import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./objects/DiveCenterWhereUniqueInput.schema";

export const DiveCenterFindUniqueSchema = z.object({
  where: DiveCenterWhereUniqueInputObjectSchema,
});
