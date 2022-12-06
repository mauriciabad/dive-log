import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageUpdateWithoutDivesInputObjectSchema } from "./WikipediaPageUpdateWithoutDivesInput.schema";
import { WikipediaPageUncheckedUpdateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedUpdateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUpdateWithWhereUniqueWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => WikipediaPageUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => WikipediaPageUncheckedUpdateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const WikipediaPageUpdateWithWhereUniqueWithoutDivesInputObjectSchema =
  Schema;
