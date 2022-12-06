import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutDiveSiteInputObjectSchema } from "./LinkCreateWithoutDiveSiteInput.schema";
import { LinkUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutDiveSiteInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutDiveSiteInputObjectSchema = Schema;
