import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./objects/EquipmentUnitWhereInput.schema";
import { EquipmentUnitOrderByWithAggregationInputObjectSchema } from "./objects/EquipmentUnitOrderByWithAggregationInput.schema";
import { EquipmentUnitScalarWhereWithAggregatesInputObjectSchema } from "./objects/EquipmentUnitScalarWhereWithAggregatesInput.schema";
import { EquipmentUnitScalarFieldEnumSchema } from "./enums/EquipmentUnitScalarFieldEnum.schema";

export const EquipmentUnitGroupBySchema = z.object({
  where: EquipmentUnitWhereInputObjectSchema.optional(),
  orderBy: z.union([
    EquipmentUnitOrderByWithAggregationInputObjectSchema,
    EquipmentUnitOrderByWithAggregationInputObjectSchema.array(),
  ]),
  having: EquipmentUnitScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EquipmentUnitScalarFieldEnumSchema),
});
