import { z } from "zod";
import { VerificationTokenWhereUniqueInputObjectSchema } from "./objects/VerificationTokenWhereUniqueInput.schema";
import { VerificationTokenCreateInputObjectSchema } from "./objects/VerificationTokenCreateInput.schema";
import { VerificationTokenUpdateInputObjectSchema } from "./objects/VerificationTokenUpdateInput.schema";

export const VerificationTokenUpsertSchema = z.object({
  where: VerificationTokenWhereUniqueInputObjectSchema,
  create: VerificationTokenCreateInputObjectSchema,
  update: VerificationTokenUpdateInputObjectSchema,
});
