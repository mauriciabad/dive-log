import { z } from "zod";
import { EquipmentUnitCreateInputObjectSchema } from "./objects/EquipmentUnitCreateInput.schema";

export const EquipmentUnitCreateOneSchema = z.object({
  data: EquipmentUnitCreateInputObjectSchema,
});
