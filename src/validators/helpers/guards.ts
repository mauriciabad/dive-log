import type { ZodTypeAny } from "zod";
import { ZodDate, ZodNumber, ZodOptional, ZodString } from "zod";

export function isZodNumber(candidate: unknown): candidate is ZodNumber {
  return candidate instanceof ZodNumber
}

export function isZodString(candidate: unknown): candidate is ZodString {
  return candidate instanceof ZodString
}

export function isZodDate(candidate: unknown): candidate is ZodDate {
  return candidate instanceof ZodDate
}

export function isZodOptional<T extends ZodTypeAny>(candidate: unknown): candidate is ZodOptional<T> {
  return candidate instanceof ZodOptional
}



