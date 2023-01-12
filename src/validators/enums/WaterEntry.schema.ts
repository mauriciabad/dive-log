import { z } from 'zod'

export const WaterEntrySchema = z.enum(['SHORE_OR_BEACH', 'BOAT', 'OTHER'])
