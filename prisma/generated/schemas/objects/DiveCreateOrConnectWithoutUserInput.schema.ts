import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutUserInputObjectSchema } from "./DiveCreateWithoutUserInput.schema";
import { DiveUncheckedCreateWithoutUserInputObjectSchema } from "./DiveUncheckedCreateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutUserInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutUserInputObjectSchema = Schema;
