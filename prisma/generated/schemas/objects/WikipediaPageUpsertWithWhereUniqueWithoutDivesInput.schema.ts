import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageUpdateWithoutDivesInputObjectSchema } from "./WikipediaPageUpdateWithoutDivesInput.schema";
import { WikipediaPageUncheckedUpdateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedUpdateWithoutDivesInput.schema";
import { WikipediaPageCreateWithoutDivesInputObjectSchema } from "./WikipediaPageCreateWithoutDivesInput.schema";
import { WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUpsertWithWhereUniqueWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => WikipediaPageUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => WikipediaPageUncheckedUpdateWithoutDivesInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => WikipediaPageCreateWithoutDivesInputObjectSchema),
        z.lazy(() => WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const WikipediaPageUpsertWithWhereUniqueWithoutDivesInputObjectSchema =
  Schema;
