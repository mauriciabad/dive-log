import { z } from "zod";
import { LinkScalarWhereInputObjectSchema } from "./LinkScalarWhereInput.schema";
import { LinkUpdateManyMutationInputObjectSchema } from "./LinkUpdateManyMutationInput.schema";
import { LinkUncheckedUpdateManyWithoutCreatedLinksInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutCreatedLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => LinkScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => LinkUncheckedUpdateManyWithoutCreatedLinksInputObjectSchema
        ),
      ]),
    })
    .strict();

export const LinkUpdateManyWithWhereWithoutCreatorUserInputObjectSchema =
  Schema;
