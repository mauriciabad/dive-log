import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveSiteInputObjectSchema } from "./LinkUpdateWithoutDiveSiteInput.schema";
import { LinkUncheckedUpdateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutDiveSiteInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveSiteInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema = Schema;
