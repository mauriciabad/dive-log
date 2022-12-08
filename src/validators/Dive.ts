// import type { Prisma } from '@prisma/client'
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
import { dateSchema } from './helper'

export const CreateDiveSchema = z
  .object({
    name: z.string(),
    diveNumber: z.number(),
    startDateTime: dateSchema,
    duration: z.number(),
    type: z
      .lazy(() => DiveTypeSchema)
      .optional(),
    specialtyDiveType: z
      .lazy(() => SpecialtyDiveTypeSchema)
      .optional(),
    // diveSiteId: z.string(),
    maximumDepth: z.number(),
    averageDepth: z.number(),
    waterMinimumTemperature: z.number().optional(),
    waterAverageTemperature: z.number().optional(),
    waterMaximumTemperature: z.number().optional(),
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
    airTemperature: z.number().optional(),
    weight: z.number().optional(),
    equipment: z.any(), // Wrong
    startCylinderPresure: z.number().optional(),
    endCylinderPresure: z.number().optional(),
    cylinderMaterial: z
      .lazy(() => CylinderMaterialSchema)
      .optional(),
    cylinderVolume: z.number().optional(),
    diveCenter: z.any(), // Wrong
    diveBuddies: z.any(), // Wrong
    roleasDiveBuddy: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional(),
    organisms: z.any(), // Wrong
    rating: z.number().optional(),
    links: z.any(), // Wrong
    experienceNotes: z.string().optional(),
    technicalNotes: z.string().optional(),
  })
  .strict();


