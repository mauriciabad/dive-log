import { z } from "zod";
import { EquipmentUnitUpdateInputObjectSchema } from "./objects/EquipmentUnitUpdateInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";

export const EquipmentUnitUpdateOneSchema = z.object({
  data: EquipmentUnitUpdateInputObjectSchema,
  where: EquipmentUnitWhereUniqueInputObjectSchema,
});
