import { z } from "zod";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";
import { LinkUpdateManyMutationInputObjectSchema } from "./LinkUpdateManyMutationInput.schema";
import { LinkUncheckedUpdateManyWithoutLinksInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutDiveCenterInput> =
  z
    .object({
      where: z.lazy(() => LinkScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateManyMutationInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateManyWithoutLinksInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateManyWithWhereWithoutDiveCenterInputObjectSchema = Schema;
