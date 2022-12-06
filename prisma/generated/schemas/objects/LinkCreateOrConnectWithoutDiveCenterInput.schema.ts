import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutDiveCenterInputObjectSchema } from "./LinkCreateWithoutDiveCenterInput.schema";
import { LinkUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutDiveCenterInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutDiveCenterInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutDiveCenterInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutDiveCenterInputObjectSchema = Schema;
