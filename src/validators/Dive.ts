import { z } from 'zod';
import { CylinderMaterialSchema } from './enums/CylinderMaterial.schema';
import { DiveBuddyInDiveRoleSchema } from './enums/DiveBuddyInDiveRole.schema';
import { DiveTypeSchema } from './enums/DiveType.schema';
import { SpecialtyDiveTypeSchema } from './enums/SpecialtyDiveType.schema';
import { WaterBodySchema } from './enums/WaterBody.schema';
import { WaterCurrentSchema } from './enums/WaterCurrent.schema';
import { WaterEntrySchema } from './enums/WaterEntry.schema';
import { WaterSurfaceSchema } from './enums/WaterSurface.schema';
import { WaterTypeSchema } from './enums/WaterType.schema';
import { WaterVisibilitySchema } from './enums/WaterVisibility.schema';
import { WeatherSchema } from './enums/Weather.schema';
import { CreateLinkSchema } from './Link';

const MAX_OCEAN_DEPTH = 11022;
const MAX_WATER_TEMP = 40;

export const CreateDiveSchema = z
  .object({
    name: z.string().max(192),
    diveNumber: z.number().gte(1),
    startDateTime: z.date(),
    duration: z.number().gte(1).lte(24 * 60 * 60 * 1000),
    type: z
      .lazy(() => DiveTypeSchema)
      .optional(),
    specialtyDiveType: z
      .lazy(() => SpecialtyDiveTypeSchema)
      .optional(),
    diveSiteId: z.string().cuid(),
    maximumDepth: z.number().gte(1).lte(MAX_OCEAN_DEPTH),
    averageDepth: z.number().gte(1).lte(MAX_OCEAN_DEPTH).optional(),
    waterMinimumTemperature: z.number().gte(1).lte(MAX_WATER_TEMP).optional(),
    waterAverageTemperature: z.number().gte(1).lte(MAX_WATER_TEMP).optional(),
    waterMaximumTemperature: z.number().gte(1).lte(MAX_WATER_TEMP).optional(),
    waterBody: z
      .lazy(() => WaterBodySchema)
      .optional(),
    waterType: z
      .lazy(() => WaterTypeSchema)
      .optional(),
    waterEntry: z
      .lazy(() => WaterEntrySchema)
      .optional(),
    waterCurrent: z
      .lazy(() => WaterCurrentSchema)
      .optional(),
    waterSurface: z
      .lazy(() => WaterSurfaceSchema)
      .optional(),
    waterVisibility: z
      .lazy(() => WaterVisibilitySchema)
      .optional(),
    weather: z
      .lazy(() => WeatherSchema)
      .optional(),
    airTemperature: z.number().lte(100).optional(),
    weight: z.number().gte(0).lte(100).optional(),
    equipment: z.any(), // Wrong
    startCylinderPresure: z.number().gt(0).optional(),
    endCylinderPresure: z.number().gte(0).optional(),
    cylinderMaterial: z
      .lazy(() => CylinderMaterialSchema)
      .optional(),
    cylinderVolume: z.number().gt(0).optional(),
    diveCenter: z.any(), // Wrong
    diveBuddies: z.any(), // Wrong
    roleasDiveBuddy: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional(),
    organisms: z.any(), // Wrong
    rating: z.number().int().gte(0).lte(10).optional(),
    links: z.array(CreateLinkSchema),
    experienceNotes: z.string().max(2000).optional(),
    technicalNotes: z.string().max(2000).optional(),
  })
  .strict();
