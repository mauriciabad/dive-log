import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./objects/EquipmentUnitWhereInput.schema";
import { EquipmentUnitOrderByWithRelationInputObjectSchema } from "./objects/EquipmentUnitOrderByWithRelationInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitCountAggregateInputObjectSchema } from "./objects/EquipmentUnitCountAggregateInput.schema";
import { EquipmentUnitMinAggregateInputObjectSchema } from "./objects/EquipmentUnitMinAggregateInput.schema";
import { EquipmentUnitMaxAggregateInputObjectSchema } from "./objects/EquipmentUnitMaxAggregateInput.schema";

export const EquipmentUnitAggregateSchema = z.object({
  where: EquipmentUnitWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EquipmentUnitOrderByWithRelationInputObjectSchema,
      EquipmentUnitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: EquipmentUnitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), EquipmentUnitCountAggregateInputObjectSchema])
    .optional(),
  _min: EquipmentUnitMinAggregateInputObjectSchema.optional(),
  _max: EquipmentUnitMaxAggregateInputObjectSchema.optional(),
});
