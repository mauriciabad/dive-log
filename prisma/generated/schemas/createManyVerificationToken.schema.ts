import { z } from "zod";
import { VerificationTokenCreateManyInputObjectSchema } from "./objects/VerificationTokenCreateManyInput.schema";

export const VerificationTokenCreateManySchema = z.object({
  data: VerificationTokenCreateManyInputObjectSchema,
});
