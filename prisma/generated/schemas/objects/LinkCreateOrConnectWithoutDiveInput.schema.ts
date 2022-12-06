import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutDiveInputObjectSchema } from "./LinkCreateWithoutDiveInput.schema";
import { LinkUncheckedCreateWithoutDiveInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutDiveInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutDiveInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutDiveInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutDiveInputObjectSchema = Schema;
