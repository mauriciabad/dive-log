import { z } from "zod";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageCreateWithoutDivesInputObjectSchema } from "./WikipediaPageCreateWithoutDivesInput.schema";
import { WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageCreateOrConnectWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => WikipediaPageCreateWithoutDivesInputObjectSchema),
        z.lazy(() => WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema),
      ]),
    })
    .strict();

export const WikipediaPageCreateOrConnectWithoutDivesInputObjectSchema = Schema;
