import { z } from 'zod'

export const WaterBodySchema = z.enum([
  'OCEAN',
  'RIVER',
  'QUARRY',
  'LAKE',
  'INDOOR',
  'ARTIFICIAL_LAKE',
  'POOL',
  'CONFINED_WATER',
  'OPEN_WATER',
  'DRY',
  'BLUE_HOLE',
  'CAVE',
  'CENOTE',
])
