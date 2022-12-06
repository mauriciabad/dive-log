import { z } from "zod";
import { WikipediaPageCreateWithoutDivesInputObjectSchema } from "./WikipediaPageCreateWithoutDivesInput.schema";
import { WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedCreateWithoutDivesInput.schema";
import { WikipediaPageCreateOrConnectWithoutDivesInputObjectSchema } from "./WikipediaPageCreateOrConnectWithoutDivesInput.schema";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./WikipediaPageWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUncheckedCreateNestedManyWithoutDivesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WikipediaPageCreateWithoutDivesInputObjectSchema),
          z
            .lazy(() => WikipediaPageCreateWithoutDivesInputObjectSchema)
            .array(),
          z.lazy(
            () => WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () => WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => WikipediaPageCreateOrConnectWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () => WikipediaPageCreateOrConnectWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WikipediaPageUncheckedCreateNestedManyWithoutDivesInputObjectSchema =
  Schema;
