import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutCreatorUserInputObjectSchema } from "./LinkUpdateWithoutCreatorUserInput.schema";
import { LinkUncheckedUpdateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedUpdateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateWithoutCreatorUserInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutCreatorUserInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema =
  Schema;
