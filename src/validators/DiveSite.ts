import { z } from "zod";
import { latitudeSchema, longitudeSchema } from "./helper";

export const CreateDiveSiteSchema = z
  .object({
    name: z.string().max(192),
    description: z.string().max(192).optional(),
    image: z.string().url().optional(),
    latitude: latitudeSchema,
    longitude: longitudeSchema,
    links: z
      .any()
      .optional(), // Wrong
  })
  .strict();