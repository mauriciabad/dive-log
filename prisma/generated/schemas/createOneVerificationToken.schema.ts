import { z } from "zod";
import { VerificationTokenCreateInputObjectSchema } from "./objects/VerificationTokenCreateInput.schema";

export const VerificationTokenCreateOneSchema = z.object({
  data: VerificationTokenCreateInputObjectSchema,
});
