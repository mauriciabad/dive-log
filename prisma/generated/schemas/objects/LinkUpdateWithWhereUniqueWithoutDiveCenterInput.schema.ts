import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveCenterInputObjectSchema } from "./LinkUpdateWithoutDiveCenterInput.schema";
import { LinkUncheckedUpdateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutDiveCenterInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveCenterInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema =
  Schema;
