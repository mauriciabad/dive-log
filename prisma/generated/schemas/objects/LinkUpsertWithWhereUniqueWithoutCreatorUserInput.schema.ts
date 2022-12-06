import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutCreatorUserInputObjectSchema } from "./LinkUpdateWithoutCreatorUserInput.schema";
import { LinkUncheckedUpdateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedUpdateWithoutCreatorUserInput.schema";
import { LinkCreateWithoutCreatorUserInputObjectSchema } from "./LinkCreateWithoutCreatorUserInput.schema";
import { LinkUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedCreateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LinkUpdateWithoutCreatorUserInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutCreatorUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LinkCreateWithoutCreatorUserInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutCreatorUserInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpsertWithWhereUniqueWithoutCreatorUserInputObjectSchema =
  Schema;
