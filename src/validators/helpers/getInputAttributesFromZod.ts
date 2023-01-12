import type { InputHTMLAttributes } from 'react'
import type { FieldPath, FieldValues } from 'react-hook-form'
import type { ZodObject, ZodRawShape, ZodType } from 'zod'
import {
  isZodArray,
  isZodDate,
  isZodNumber,
  isZodObject,
  isZodOptional,
  isZodString,
} from '.'

type InputProps = InputHTMLAttributes<HTMLInputElement>
export function getInputAttributesFromZod<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  Schema extends ZodObject<TZodSchema, 'strict'>,
  TZodSchema extends ZodRawShape
>(schema: Schema, internalLabel: TName): InputProps {
  const path = internalLabel.split('.')
  let nestedSchema: ZodType = schema

  // TODO: I think that optional Objects or Array wont work
  for (const label of path) {
    if (isZodObject(nestedSchema)) {
      const newNestedSchema =
        nestedSchema.shape[
          label as unknown as keyof (typeof nestedSchema)['shape']
        ]
      if (newNestedSchema) nestedSchema = newNestedSchema
    } else if (isZodArray(nestedSchema)) {
      nestedSchema = nestedSchema.element
    } else {
      nestedSchema = nestedSchema
    }
  }

  const result: InputProps = {}

  if (isZodOptional(nestedSchema)) {
    result.required = false
    nestedSchema = nestedSchema._def.innerType
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
    console.warn(`Unknown input type for schema`, nestedSchema)
  }

  return result
}
