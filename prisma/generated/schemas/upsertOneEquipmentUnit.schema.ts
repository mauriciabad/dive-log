import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitCreateInputObjectSchema } from "./objects/EquipmentUnitCreateInput.schema";
import { EquipmentUnitUpdateInputObjectSchema } from "./objects/EquipmentUnitUpdateInput.schema";

export const EquipmentUnitUpsertSchema = z.object({
  where: EquipmentUnitWhereUniqueInputObjectSchema,
  create: EquipmentUnitCreateInputObjectSchema,
  update: EquipmentUnitUpdateInputObjectSchema,
});
