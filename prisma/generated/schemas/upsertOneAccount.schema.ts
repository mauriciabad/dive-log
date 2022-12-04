import { z } from "zod";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";
import { AccountCreateInputObjectSchema } from "./objects/AccountCreateInput.schema";
import { AccountUpdateInputObjectSchema } from "./objects/AccountUpdateInput.schema";

export const AccountUpsertSchema = z.object({
  where: AccountWhereUniqueInputObjectSchema,
  create: AccountCreateInputObjectSchema,
  update: AccountUpdateInputObjectSchema,
});
