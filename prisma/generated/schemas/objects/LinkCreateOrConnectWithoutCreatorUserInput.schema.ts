import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutCreatorUserInputObjectSchema } from "./LinkCreateWithoutCreatorUserInput.schema";
import { LinkUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./LinkUncheckedCreateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutCreatorUserInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutCreatorUserInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutCreatorUserInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutCreatorUserInputObjectSchema = Schema;
