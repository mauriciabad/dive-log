import { z } from 'zod'

export const DiveTypeSchema = z.enum([
  'RECREATIONAL',
  'EDUCATION',
  'RESEARCH',
  'WORK',
])
