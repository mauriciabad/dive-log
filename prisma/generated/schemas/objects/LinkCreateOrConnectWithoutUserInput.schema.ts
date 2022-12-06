import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutUserInputObjectSchema } from "./LinkCreateWithoutUserInput.schema";
import { LinkUncheckedCreateWithoutUserInputObjectSchema } from "./LinkUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutUserInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutUserInputObjectSchema = Schema;
