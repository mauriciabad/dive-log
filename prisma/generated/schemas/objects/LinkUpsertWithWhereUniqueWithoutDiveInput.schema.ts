import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveInputObjectSchema } from "./LinkUpdateWithoutDiveInput.schema";
import { LinkUncheckedUpdateWithoutDiveInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveInput.schema";
import { LinkCreateWithoutDiveInputObjectSchema } from "./LinkCreateWithoutDiveInput.schema";
import { LinkUncheckedCreateWithoutDiveInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutDiveInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => LinkUpdateWithoutDiveInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutDiveInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => LinkCreateWithoutDiveInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutDiveInputObjectSchema),
    ]),
  })
  .strict();

export const LinkUpsertWithWhereUniqueWithoutDiveInputObjectSchema = Schema;
