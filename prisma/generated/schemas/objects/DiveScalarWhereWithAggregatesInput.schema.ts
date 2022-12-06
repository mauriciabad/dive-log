import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema";
import { EnumDiveTypeNullableWithAggregatesFilterObjectSchema } from "./EnumDiveTypeNullableWithAggregatesFilter.schema";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { EnumSpecialtyDiveTypeNullableWithAggregatesFilterObjectSchema } from "./EnumSpecialtyDiveTypeNullableWithAggregatesFilter.schema";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { DecimalWithAggregatesFilterObjectSchema } from "./DecimalWithAggregatesFilter.schema";
import { DecimalNullableWithAggregatesFilterObjectSchema } from "./DecimalNullableWithAggregatesFilter.schema";
import { EnumWaterBodyNullableWithAggregatesFilterObjectSchema } from "./EnumWaterBodyNullableWithAggregatesFilter.schema";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { EnumWaterTypeNullableWithAggregatesFilterObjectSchema } from "./EnumWaterTypeNullableWithAggregatesFilter.schema";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { EnumWaterEntryNullableWithAggregatesFilterObjectSchema } from "./EnumWaterEntryNullableWithAggregatesFilter.schema";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { EnumWaterCurrentNullableWithAggregatesFilterObjectSchema } from "./EnumWaterCurrentNullableWithAggregatesFilter.schema";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { EnumWaterSurfaceNullableWithAggregatesFilterObjectSchema } from "./EnumWaterSurfaceNullableWithAggregatesFilter.schema";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { EnumWaterVisibilityNullableWithAggregatesFilterObjectSchema } from "./EnumWaterVisibilityNullableWithAggregatesFilter.schema";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { EnumWeatherNullableWithAggregatesFilterObjectSchema } from "./EnumWeatherNullableWithAggregatesFilter.schema";
import { WeatherSchema } from "../enums/Weather.schema";
import { IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema";
import { EnumCylinderMaterialNullableWithAggregatesFilterObjectSchema } from "./EnumCylinderMaterialNullableWithAggregatesFilter.schema";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { EnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema } from "./EnumDiveBuddyInDiveRoleNullableWithAggregatesFilter.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DiveScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    diveNumber: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    startDateTime: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    duration: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumDiveTypeNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => DiveTypeSchema),
      ])
      .optional()
      .nullable(),
    specialtyDiveType: z
      .union([
        z.lazy(
          () => EnumSpecialtyDiveTypeNullableWithAggregatesFilterObjectSchema
        ),
        z.lazy(() => SpecialtyDiveTypeSchema),
      ])
      .optional()
      .nullable(),
    diveSiteId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    maximumDepth: z
      .union([
        z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional(),
    averageDepth: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    waterMinimumTemperature: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    waterAverageTemperature: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    waterMaximumTemperature: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    waterBody: z
      .union([
        z.lazy(() => EnumWaterBodyNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WaterBodySchema),
      ])
      .optional()
      .nullable(),
    waterType: z
      .union([
        z.lazy(() => EnumWaterTypeNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WaterTypeSchema),
      ])
      .optional()
      .nullable(),
    waterEntry: z
      .union([
        z.lazy(() => EnumWaterEntryNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WaterEntrySchema),
      ])
      .optional()
      .nullable(),
    waterCurrent: z
      .union([
        z.lazy(() => EnumWaterCurrentNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WaterCurrentSchema),
      ])
      .optional()
      .nullable(),
    waterSurface: z
      .union([
        z.lazy(() => EnumWaterSurfaceNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WaterSurfaceSchema),
      ])
      .optional()
      .nullable(),
    waterVisibility: z
      .union([
        z.lazy(
          () => EnumWaterVisibilityNullableWithAggregatesFilterObjectSchema
        ),
        z.lazy(() => WaterVisibilitySchema),
      ])
      .optional()
      .nullable(),
    weather: z
      .union([
        z.lazy(() => EnumWeatherNullableWithAggregatesFilterObjectSchema),
        z.lazy(() => WeatherSchema),
      ])
      .optional()
      .nullable(),
    airTemperature: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    weight: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    startCylinderPresure: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    endCylinderPresure: z
      .union([
        z.lazy(() => IntNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    cylinderMaterial: z
      .union([
        z.lazy(
          () => EnumCylinderMaterialNullableWithAggregatesFilterObjectSchema
        ),
        z.lazy(() => CylinderMaterialSchema),
      ])
      .optional()
      .nullable(),
    cylinderVolume: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    diveCenterId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    roleasDiveBuddy: z
      .union([
        z.lazy(
          () => EnumDiveBuddyInDiveRoleNullableWithAggregatesFilterObjectSchema
        ),
        z.lazy(() => DiveBuddyInDiveRoleSchema),
      ])
      .optional()
      .nullable(),
    rating: z
      .union([
        z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
        z.number(),
      ])
      .optional()
      .nullable(),
    experienceNotes: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    technicalNotes: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const DiveScalarWhereWithAggregatesInputObjectSchema = Schema;
