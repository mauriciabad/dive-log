import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveCenterInputObjectSchema } from "./LinkUpdateWithoutDiveCenterInput.schema";
import { LinkUncheckedUpdateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveCenterInput.schema";
import { LinkCreateWithoutDiveCenterInputObjectSchema } from "./LinkCreateWithoutDiveCenterInput.schema";
import { LinkUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutDiveCenterInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LinkUpdateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveCenterInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LinkCreateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutDiveCenterInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema =
  Schema;
