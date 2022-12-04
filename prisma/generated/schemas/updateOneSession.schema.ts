import { z } from "zod";
import { SessionUpdateInputObjectSchema } from "./objects/SessionUpdateInput.schema";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";

export const SessionUpdateOneSchema = z.object({
  data: SessionUpdateInputObjectSchema,
  where: SessionWhereUniqueInputObjectSchema,
});
