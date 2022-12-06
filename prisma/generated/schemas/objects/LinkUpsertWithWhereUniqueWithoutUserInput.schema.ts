import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutUserInputObjectSchema } from "./LinkUpdateWithoutUserInput.schema";
import { LinkUncheckedUpdateWithoutUserInputObjectSchema } from "./LinkUncheckedUpdateWithoutUserInput.schema";
import { LinkCreateWithoutUserInputObjectSchema } from "./LinkCreateWithoutUserInput.schema";
import { LinkUncheckedCreateWithoutUserInputObjectSchema } from "./LinkUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LinkUpdateWithoutUserInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LinkCreateWithoutUserInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LinkUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
