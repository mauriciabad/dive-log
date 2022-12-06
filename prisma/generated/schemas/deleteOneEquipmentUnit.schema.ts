import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";

export const EquipmentUnitDeleteOneSchema = z.object({
  where: EquipmentUnitWhereUniqueInputObjectSchema,
});
