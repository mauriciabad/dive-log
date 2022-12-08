import { z } from 'zod';

// TODO: Remove this code when this bug gets fixed: https://github.com/colinhacks/zod/issues/126
export const dateSchema = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());
export type DateSchema = z.infer<typeof dateSchema>;
