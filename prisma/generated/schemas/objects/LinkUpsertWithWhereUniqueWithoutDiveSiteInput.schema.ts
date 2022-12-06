import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveSiteInputObjectSchema } from "./LinkUpdateWithoutDiveSiteInput.schema";
import { LinkUncheckedUpdateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveSiteInput.schema";
import { LinkCreateWithoutDiveSiteInputObjectSchema } from "./LinkCreateWithoutDiveSiteInput.schema";
import { LinkUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutDiveSiteInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LinkUpdateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveSiteInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema = Schema;
