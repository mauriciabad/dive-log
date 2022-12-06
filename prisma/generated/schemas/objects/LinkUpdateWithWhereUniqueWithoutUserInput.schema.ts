import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutUserInputObjectSchema } from "./LinkUpdateWithoutUserInput.schema";
import { LinkUncheckedUpdateWithoutUserInputObjectSchema } from "./LinkUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LinkUpdateWithoutUserInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LinkUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
