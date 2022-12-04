import { z } from "zod";
import { AccountCreateInputObjectSchema } from "./objects/AccountCreateInput.schema";

export const AccountCreateOneSchema = z.object({
  data: AccountCreateInputObjectSchema,
});
