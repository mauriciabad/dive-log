import { z } from 'zod'

export const WaterSurfaceSchema = z.enum(['CALM', 'MOVING', 'STORMY'])
