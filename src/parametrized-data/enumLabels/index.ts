import type { ZodEnum } from 'zod';
import type { CylinderMaterialSchema } from '../../validators/enums/CylinderMaterial.schema';
import type { DiveBuddyInDiveRoleSchema } from '../../validators/enums/DiveBuddyInDiveRole.schema';
import type { DiveTypeSchema } from '../../validators/enums/DiveType.schema';
import type { SpecialtyDiveTypeSchema } from '../../validators/enums/SpecialtyDiveType.schema';
import type { WaterBodySchema } from '../../validators/enums/WaterBody.schema';
import type { WaterCurrentSchema } from '../../validators/enums/WaterCurrent.schema';
import type { WaterEntrySchema } from '../../validators/enums/WaterEntry.schema';
import type { WaterSurfaceSchema } from '../../validators/enums/WaterSurface.schema';
import type { WaterTypeSchema } from '../../validators/enums/WaterType.schema';
import type { WaterVisibilitySchema } from '../../validators/enums/WaterVisibility.schema';
import type { WeatherSchema } from '../../validators/enums/Weather.schema';

type EnumLabelsAsArray<T extends string> = ({
  [K in T]: {
    label: string,
    value: K
  };
}[T])[];

export function enumLabelsAsArray<Schema extends ZodEnum<T>, T extends [string, ...string[]] = [string, ...string[]]>(labels: EnumOptionsLabels<Schema, T>): EnumLabelsAsArray<EnumOptions<Schema>> {
  return Object.entries(labels)
    .map(([value, label]) => ({
      label,
      value
    })) as unknown as EnumLabelsAsArray<EnumOptions<Schema>>
}

type EnumOptions<Schema extends ZodEnum<T>, T extends [string, ...string[]] = [string, ...string[]]> = Schema['options'][number]
type EnumOptionsLabels<Schema extends ZodEnum<T>, T extends [string, ...string[]] = [string, ...string[]]> = Record<EnumOptions<Schema>, string>

export const enumLabels: {
  CylinderMaterial: EnumOptionsLabels<typeof CylinderMaterialSchema>,
  DiveBuddyInDiveRole: EnumOptionsLabels<typeof DiveBuddyInDiveRoleSchema>,
  DiveType: EnumOptionsLabels<typeof DiveTypeSchema>,
  SpecialtyDiveType: EnumOptionsLabels<typeof SpecialtyDiveTypeSchema>,
  WaterBody: EnumOptionsLabels<typeof WaterBodySchema>,
  WaterCurrent: EnumOptionsLabels<typeof WaterCurrentSchema>,
  WaterEntry: EnumOptionsLabels<typeof WaterEntrySchema>,
  WaterSurface: EnumOptionsLabels<typeof WaterSurfaceSchema>,
  WaterType: EnumOptionsLabels<typeof WaterTypeSchema>,
  WaterVisibility: EnumOptionsLabels<typeof WaterVisibilitySchema>,
  Weather: EnumOptionsLabels<typeof WeatherSchema>,
} = {
  CylinderMaterial: {
    ALUMINIUM: 'Aluminium',
    STEEL: 'Steel',
  },
  DiveBuddyInDiveRole: {
    GUIDE: 'Guide',
    STUDENT: 'Student',
    RECREATIONAL: 'Recreational',
    IRRELEVANT: 'Irrelevant',
  },
  DiveType: {
    RECREATIONAL: 'Recreational',
    EDUCATION: 'Education',
    RESEARCH: 'Research',
    WORK: 'Work',
  },
  SpecialtyDiveType: {
    BOAT_DIVE: 'Boat dive',
    PERFECT_BUOYANCY_DIVE: 'Perfect buoyancy dive',
    DIVE_COMPUTER: 'Dive computer',
    DEEP_DIVE: 'Deep dive',
    DRIFT_DIVE: 'Drift dive',
    NAVIGATION_DIVE: 'Navigation dive',
    DRY_SUIT_DIVE: 'Dry suit dive',
    PHOTO_AND_VIDEO_DIVE: 'Photo and video dive',
    DIVE_EQUIPMENT: 'Dive equipment',
    SHARK_DIVE: 'Shark dive',
    SEARCH_DIVE: 'Search dive',
    NIGHT_DIVE: 'Night dive',
    NITROX_DIVE: 'Nitrox dive',
    CAVE_DIVE: 'Cave dive',
    WRECK_DIVE: 'Wreck dive',
    SNORKELING: 'Snorkeling',
    ICE_DIVE: 'Ice dive',
    OPEN_WATER_DIVE: 'Open water dive',
    DECO_DIVE: 'Deco dive',
    DPV_OR_SCOOTER: 'Dpv or scooter',
  }
  ,
  WaterBody: {
    OCEAN: 'Ocean',
    RIVER: 'River',
    QUARRY: 'Quarry',
    LAKE: 'Lake',
    INDOOR: 'Indoor',
    ARTIFICIAL_LAKE: 'Artificial lake',
    POOL: 'Pool',
    CONFINED_WATER: 'Confined water',
    OPEN_WATER: 'Open water',
    DRY: 'Dry',
    BLUE_HOLE: 'Blue hole',
    CAVE: 'Cave',
    CENOTE: 'Cenote',
  },
  WaterCurrent: {
    NONE: 'None',
    SLIGHT: 'Slight',
    STRONG: 'Strong',
    RIPPING: 'Ripping',
  },
  WaterEntry: {
    SHORE_OR_BEACH: 'Shore or beach',
    BOAT: 'Boat',
    OTHER: 'Other',
  },
  WaterSurface: {
    CALM: 'Calm',
    MOVING: 'Moving',
    STORMY: 'Stormy',
  },
  WaterType: {
    FRESH: 'Fresh',
    SALT: 'Salt',
  },
  WaterVisibility: {
    BAD: 'Bad',
    MEDIUM: 'Medium',
    GOOD: 'Good',
    PERFECT: 'Perfect',
  },
  Weather: {
    CLOUDLESS: 'Cloudless',
    CLOUDY: 'Cloudy',
    RAINY: 'Rainy',
    SNOW: 'Snow',
  }
}
