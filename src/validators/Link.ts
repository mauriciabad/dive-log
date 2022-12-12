import { z } from "zod";
import { LinkTypeSchema } from '../validators/enums/LinkType.schema'

export const CreateLinkSchema = z
  .object({
    link: z.string().url(),
    type: z
      .lazy(() => LinkTypeSchema),
    title: z.string().max(192).optional(),
    thumbnail: z.string().url().optional(),
  })
  .strict();
