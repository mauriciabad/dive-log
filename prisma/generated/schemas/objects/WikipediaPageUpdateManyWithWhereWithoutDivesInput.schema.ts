import { z } from "zod";
import { WikipediaPageScalarWhereInputObjectSchema } from "./WikipediaPageScalarWhereInput.schema";
import { WikipediaPageUpdateManyMutationInputObjectSchema } from "./WikipediaPageUpdateManyMutationInput.schema";
import { WikipediaPageUncheckedUpdateManyWithoutOrganismsInputObjectSchema } from "./WikipediaPageUncheckedUpdateManyWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUpdateManyWithWhereWithoutDivesInput> =
  z
    .object({
      where: z.lazy(() => WikipediaPageScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => WikipediaPageUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            WikipediaPageUncheckedUpdateManyWithoutOrganismsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const WikipediaPageUpdateManyWithWhereWithoutDivesInputObjectSchema =
  Schema;
