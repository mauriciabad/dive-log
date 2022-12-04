import { z } from "zod";
import { SessionWhereUniqueInputObjectSchema } from "./objects/SessionWhereUniqueInput.schema";
import { SessionCreateInputObjectSchema } from "./objects/SessionCreateInput.schema";
import { SessionUpdateInputObjectSchema } from "./objects/SessionUpdateInput.schema";

export const SessionUpsertSchema = z.object({
  where: SessionWhereUniqueInputObjectSchema,
  create: SessionCreateInputObjectSchema,
  update: SessionUpdateInputObjectSchema,
});
