import type { InputHTMLAttributes } from "react";
import type { ZodType } from "zod";
import { isZodDate, isZodNumber, isZodOptional, isZodString } from ".";

export function getInputAttributesFromZod<T extends ZodType>(schema: T): InputHTMLAttributes<HTMLInputElement> {
  const result: InputHTMLAttributes<HTMLInputElement> = {}
  let nestedSchema: ZodType = schema

  if (isZodOptional(schema)) {
    result.required = false

    nestedSchema = schema._def.innerType
  } else {
    result.required = true
  }

  if (isZodString(nestedSchema)) {

    result.type = 'text'

    if (nestedSchema.maxLength) result.maxLength = nestedSchema.maxLength
    if (nestedSchema.minLength) result.minLength = nestedSchema.minLength
    if (nestedSchema.isEmail) result.type = 'email'
    if (nestedSchema.isURL) result.type = 'url'

  } else if (isZodNumber(nestedSchema)) {

    result.type = 'number'

    if (nestedSchema.maxValue) result.max = nestedSchema.maxValue
    if (nestedSchema.minValue) result.min = nestedSchema.minValue
    if (nestedSchema.isInt) result.step = 1

  } else if (isZodDate(nestedSchema)) {

    result.type = 'datetime-local'

  } else {
    console.warn(`Unknown input type for schema`, schema);
  }

  return result
}