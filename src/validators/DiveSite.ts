import { z } from "zod";

export const CreateDiveSiteSchema = z
  .object({
    name: z.string(),
    description: z.string().optional(),
    image: z.string().url().optional(),
    latitude: z.number(),
    longitude: z.number(),
    links: z
      .any()
      .optional(), // Wrong
  })
  .strict();