import { z } from "zod";
import { AccountUpdateInputObjectSchema } from "./objects/AccountUpdateInput.schema";
import { AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema";

export const AccountUpdateOneSchema = z.object({
  data: AccountUpdateInputObjectSchema,
  where: AccountWhereUniqueInputObjectSchema,
});
