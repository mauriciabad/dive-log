import type { Prisma } from '@prisma/client'
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

// export const DiveValidator: z.ZodType<Prisma.DiveCreateInput> = z
export const DiveValidator = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.any(), // Wrong
    name: z.string(),
    diveNumber: z.number(),
    startDateTime: z.date(),
    duration: z.number(),
    type: z
      .lazy(() => DiveTypeSchema)
      .optional()
      .nullable(),
    specialtyDiveType: z
      .lazy(() => SpecialtyDiveTypeSchema)
      .optional()
      .nullable(),
    diveSite: z.any(), // Wrong
    maximumDepth: z.number(),
    averageDepth: z.number().optional().nullable(),
    waterMinimumTemperature: z.number().optional().nullable(),
    waterAverageTemperature: z.number().optional().nullable(),
    waterMaximumTemperature: z.number().optional().nullable(),
    waterBody: z
      .lazy(() => WaterBodySchema)
      .optional()
      .nullable(),
    waterType: z
      .lazy(() => WaterTypeSchema)
      .optional()
      .nullable(),
    waterEntry: z
      .lazy(() => WaterEntrySchema)
      .optional()
      .nullable(),
    waterCurrent: z
      .lazy(() => WaterCurrentSchema)
      .optional()
      .nullable(),
    waterSurface: z
      .lazy(() => WaterSurfaceSchema)
      .optional()
      .nullable(),
    waterVisibility: z
      .lazy(() => WaterVisibilitySchema)
      .optional()
      .nullable(),
    weather: z
      .lazy(() => WeatherSchema)
      .optional()
      .nullable(),
    airTemperature: z.number().optional().nullable(),
    weight: z.number().optional().nullable(),
    equipment: z.any(), // Wrong
    startCylinderPresure: z.number().optional().nullable(),
    endCylinderPresure: z.number().optional().nullable(),
    cylinderMaterial: z
      .lazy(() => CylinderMaterialSchema)
      .optional()
      .nullable(),
    cylinderVolume: z.number().optional().nullable(),
    diveCenter: z.any(), // Wrong
    diveBuddies: z.any(), // Wrong
    roleasDiveBuddy: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
    organisms: z.any(), // Wrong
    rating: z.number().optional().nullable(),
    links: z.any(), // Wrong
    experienceNotes: z.string().optional().nullable(),
    technicalNotes: z.string().optional().nullable(),
  })
  .strict();


