import { z } from "zod";
import { WikipediaPageCreateWithoutDivesInputObjectSchema } from "./WikipediaPageCreateWithoutDivesInput.schema";
import { WikipediaPageUncheckedCreateWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedCreateWithoutDivesInput.schema";
import { WikipediaPageCreateOrConnectWithoutDivesInputObjectSchema } from "./WikipediaPageCreateOrConnectWithoutDivesInput.schema";
import { WikipediaPageUpsertWithWhereUniqueWithoutDivesInputObjectSchema } from "./WikipediaPageUpsertWithWhereUniqueWithoutDivesInput.schema";
import { WikipediaPageWhereUniqueInputObjectSchema } from "./WikipediaPageWhereUniqueInput.schema";
import { WikipediaPageUpdateWithWhereUniqueWithoutDivesInputObjectSchema } from "./WikipediaPageUpdateWithWhereUniqueWithoutDivesInput.schema";
import { WikipediaPageUpdateManyWithWhereWithoutDivesInputObjectSchema } from "./WikipediaPageUpdateManyWithWhereWithoutDivesInput.schema";
import { WikipediaPageScalarWhereInputObjectSchema } from "./WikipediaPageScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WikipediaPageUncheckedUpdateManyWithoutDivesNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              WikipediaPageUpsertWithWhereUniqueWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                WikipediaPageUpsertWithWhereUniqueWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema),
          z.lazy(() => WikipediaPageWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              WikipediaPageUpdateWithWhereUniqueWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                WikipediaPageUpdateWithWhereUniqueWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => WikipediaPageUpdateManyWithWhereWithoutDivesInputObjectSchema
          ),
          z
            .lazy(
              () =>
                WikipediaPageUpdateManyWithWhereWithoutDivesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WikipediaPageScalarWhereInputObjectSchema),
          z.lazy(() => WikipediaPageScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WikipediaPageUncheckedUpdateManyWithoutDivesNestedInputObjectSchema =
  Schema;
