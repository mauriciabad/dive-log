import { z } from "zod";
import { SessionCreateInputObjectSchema } from "./objects/SessionCreateInput.schema";

export const SessionCreateOneSchema = z.object({
  data: SessionCreateInputObjectSchema,
});
