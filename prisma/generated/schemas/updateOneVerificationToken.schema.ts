import { z } from "zod";
import { VerificationTokenUpdateInputObjectSchema } from "./objects/VerificationTokenUpdateInput.schema";
import { VerificationTokenWhereUniqueInputObjectSchema } from "./objects/VerificationTokenWhereUniqueInput.schema";

export const VerificationTokenUpdateOneSchema = z.object({
  data: VerificationTokenUpdateInputObjectSchema,
  where: VerificationTokenWhereUniqueInputObjectSchema,
});
