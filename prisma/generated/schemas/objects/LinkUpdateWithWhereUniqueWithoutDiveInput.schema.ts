import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveInputObjectSchema } from "./LinkUpdateWithoutDiveInput.schema";
import { LinkUncheckedUpdateWithoutDiveInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutDiveInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => LinkUpdateWithoutDiveInputObjectSchema),
      z.lazy(() => LinkUncheckedUpdateWithoutDiveInputObjectSchema),
    ]),
  })
  .strict();

export const LinkUpdateWithWhereUniqueWithoutDiveInputObjectSchema = Schema;
