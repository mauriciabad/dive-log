import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutUserInputObjectSchema } from "./DiveUpdateWithoutUserInput.schema";
import { DiveUncheckedUpdateWithoutUserInputObjectSchema } from "./DiveUncheckedUpdateWithoutUserInput.schema";
import { DiveCreateWithoutUserInputObjectSchema } from "./DiveCreateWithoutUserInput.schema";
import { DiveUncheckedCreateWithoutUserInputObjectSchema } from "./DiveUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DiveUpdateWithoutUserInputObjectSchema),
      z.lazy(() => DiveUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveCreateWithoutUserInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DiveUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
