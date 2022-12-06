import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema";
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { EnumDiveTypeNullableFilterObjectSchema } from "./EnumDiveTypeNullableFilter.schema";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { EnumSpecialtyDiveTypeNullableFilterObjectSchema } from "./EnumSpecialtyDiveTypeNullableFilter.schema";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { DiveSiteRelationFilterObjectSchema } from "./DiveSiteRelationFilter.schema";
import { DiveSiteWhereInputObjectSchema } from "./DiveSiteWhereInput.schema";
import { DecimalFilterObjectSchema } from "./DecimalFilter.schema";
import { DecimalNullableFilterObjectSchema } from "./DecimalNullableFilter.schema";
import { EnumWaterBodyNullableFilterObjectSchema } from "./EnumWaterBodyNullableFilter.schema";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { EnumWaterTypeNullableFilterObjectSchema } from "./EnumWaterTypeNullableFilter.schema";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { EnumWaterEntryNullableFilterObjectSchema } from "./EnumWaterEntryNullableFilter.schema";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { EnumWaterCurrentNullableFilterObjectSchema } from "./EnumWaterCurrentNullableFilter.schema";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { EnumWaterSurfaceNullableFilterObjectSchema } from "./EnumWaterSurfaceNullableFilter.schema";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { EnumWaterVisibilityNullableFilterObjectSchema } from "./EnumWaterVisibilityNullableFilter.schema";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { EnumWeatherNullableFilterObjectSchema } from "./EnumWeatherNullableFilter.schema";
import { WeatherSchema } from "../enums/Weather.schema";
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema";
import { EquipmentUnitListRelationFilterObjectSchema } from "./EquipmentUnitListRelationFilter.schema";
import { EnumCylinderMaterialNullableFilterObjectSchema } from "./EnumCylinderMaterialNullableFilter.schema";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { DiveCenterRelationFilterObjectSchema } from "./DiveCenterRelationFilter.schema";
import { DiveCenterWhereInputObjectSchema } from "./DiveCenterWhereInput.schema";
import { DiveBuddyInDiveListRelationFilterObjectSchema } from "./DiveBuddyInDiveListRelationFilter.schema";
import { EnumDiveBuddyInDiveRoleNullableFilterObjectSchema } from "./EnumDiveBuddyInDiveRoleNullableFilter.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { WikipediaPageListRelationFilterObjectSchema } from "./WikipediaPageListRelationFilter.schema";
import { LinkListRelationFilterObjectSchema } from "./LinkListRelationFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveWhereInputObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveWhereInputObjectSchema),
        z.lazy(() => DiveWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    diveNumber: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    startDateTime: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    duration: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumDiveTypeNullableFilterObjectSchema),
        z.lazy(() => DiveTypeSchema),
      ])
      .optional()
      .nullable(),
    specialtyDiveType: z
      .union([
        z.lazy(() => EnumSpecialtyDiveTypeNullableFilterObjectSchema),
        z.lazy(() => SpecialtyDiveTypeSchema),
      ])
      .optional()
      .nullable(),
    diveSite: z
      .union([
        z.lazy(() => DiveSiteRelationFilterObjectSchema),
        z.lazy(() => DiveSiteWhereInputObjectSchema),
      ])
      .optional(),
    diveSiteId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    maximumDepth: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    averageDepth: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    waterMinimumTemperature: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    waterAverageTemperature: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    waterMaximumTemperature: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    waterBody: z
      .union([
        z.lazy(() => EnumWaterBodyNullableFilterObjectSchema),
        z.lazy(() => WaterBodySchema),
      ])
      .optional()
      .nullable(),
    waterType: z
      .union([
        z.lazy(() => EnumWaterTypeNullableFilterObjectSchema),
        z.lazy(() => WaterTypeSchema),
      ])
      .optional()
      .nullable(),
    waterEntry: z
      .union([
        z.lazy(() => EnumWaterEntryNullableFilterObjectSchema),
        z.lazy(() => WaterEntrySchema),
      ])
      .optional()
      .nullable(),
    waterCurrent: z
      .union([
        z.lazy(() => EnumWaterCurrentNullableFilterObjectSchema),
        z.lazy(() => WaterCurrentSchema),
      ])
      .optional()
      .nullable(),
    waterSurface: z
      .union([
        z.lazy(() => EnumWaterSurfaceNullableFilterObjectSchema),
        z.lazy(() => WaterSurfaceSchema),
      ])
      .optional()
      .nullable(),
    waterVisibility: z
      .union([
        z.lazy(() => EnumWaterVisibilityNullableFilterObjectSchema),
        z.lazy(() => WaterVisibilitySchema),
      ])
      .optional()
      .nullable(),
    weather: z
      .union([
        z.lazy(() => EnumWeatherNullableFilterObjectSchema),
        z.lazy(() => WeatherSchema),
      ])
      .optional()
      .nullable(),
    airTemperature: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    weight: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    equipment: z
      .lazy(() => EquipmentUnitListRelationFilterObjectSchema)
      .optional(),
    startCylinderPresure: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    endCylinderPresure: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    cylinderMaterial: z
      .union([
        z.lazy(() => EnumCylinderMaterialNullableFilterObjectSchema),
        z.lazy(() => CylinderMaterialSchema),
      ])
      .optional()
      .nullable(),
    cylinderVolume: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    diveCenter: z
      .union([
        z.lazy(() => DiveCenterRelationFilterObjectSchema),
        z.lazy(() => DiveCenterWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveCenterId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    diveBuddies: z
      .lazy(() => DiveBuddyInDiveListRelationFilterObjectSchema)
      .optional(),
    roleasDiveBuddy: z
      .union([
        z.lazy(() => EnumDiveBuddyInDiveRoleNullableFilterObjectSchema),
        z.lazy(() => DiveBuddyInDiveRoleSchema),
      ])
      .optional()
      .nullable(),
    organisms: z
      .lazy(() => WikipediaPageListRelationFilterObjectSchema)
      .optional(),
    rating: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    links: z.lazy(() => LinkListRelationFilterObjectSchema).optional(),
    experienceNotes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    technicalNotes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const DiveWhereInputObjectSchema = Schema;
