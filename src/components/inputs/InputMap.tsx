import React from "react"
import Map from './uncontrolled/Map'
import InputDiv from './InputDiv'
import type { IconType } from "react-icons/lib/cjs/iconBase";
import { TbMapPin } from "react-icons/tb";
import type { Control, FieldErrors, FieldPath, FieldValues } from "react-hook-form";
import { useController } from "react-hook-form";
import type { ZodObject, ZodRawShape } from "zod";
import { getInputAttributesFromZod } from "../../validators/helpers";

export interface Props<TFieldValues extends FieldValues, TNameLatitude extends FieldPath<TFieldValues>, TNameLongitude extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape> {
  className?: string
  Icon?: IconType
  label: string
  note?: string
  internalLabelLatitude: TNameLatitude
  internalLabelLongitude: TNameLongitude
  errorLatitude?: FieldErrors<TFieldValues>[TNameLatitude]
  errorLongitude?: FieldErrors<TFieldValues>[TNameLongitude]
  control: Control<TFieldValues>,
  schema: ZodObject<TZodSchema, "strict">
}


const InputMap =
  <TFieldValues extends FieldValues, TNameLatitude extends FieldPath<TFieldValues>, TNameLongitude extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape>({
    className,
    label = 'Location',
    Icon = TbMapPin,
    note,
    control,
    internalLabelLatitude,
    internalLabelLongitude,
    errorLatitude,
    errorLongitude,
    schema,
  }: Props<TFieldValues, TNameLatitude, TNameLongitude, TZodSchema>) => {

    const latitudeController = useController({ control, name: internalLabelLatitude })
    const longitudeController = useController({ control, name: internalLabelLongitude })

    const errorMessage = getErrorMessage(errorLatitude, errorLongitude);

    const { required: requiredLatitude } = getInputAttributesFromZod(schema, internalLabelLatitude)
    const { required: requiredLongitude } = getInputAttributesFromZod(schema, internalLabelLongitude)

    return (
      <InputDiv
        label={label}
        Icon={Icon}
        note={note}
        required={requiredLatitude || requiredLongitude}
        errorMessage={errorMessage}
        className={className}
      >
        <Map
          onChange={(location) => {
            latitudeController.field.onChange(location?.latitude)
            longitudeController.field.onChange(location?.longitude)
          }}
          value={latitudeController.field.value && longitudeController.field.value ? {
            latitude: latitudeController.field.value,
            longitude: longitudeController.field.value,
          } : undefined}
          showCenterMarker
        />
      </InputDiv>
    )
  }
export const makeCustomInputMap = <TFieldValues extends FieldValues, TNameLatitude extends FieldPath<TFieldValues>, TNameLongitude extends FieldPath<TFieldValues>, TZodSchema extends ZodRawShape>(rebundantProps: {
  errors: FieldErrors<TFieldValues>,
  control: Props<TFieldValues, TNameLatitude, TNameLongitude, TZodSchema>['control']
  schema: Props<TFieldValues, TNameLatitude, TNameLongitude, TZodSchema>['schema']
}) => {
  return (props: Omit<Props<TFieldValues, TNameLatitude, TNameLongitude, TZodSchema>, keyof typeof rebundantProps>) => {
    return InputMap({
      control: rebundantProps.control,
      schema: rebundantProps.schema,
      errorLatitude: rebundantProps.errors[props.internalLabelLatitude],
      errorLongitude: rebundantProps.errors[props.internalLabelLongitude],

      ...props
    })
  }
}

export default InputMap

function getErrorMessage<TFieldValues extends FieldValues, TNameLatitude extends FieldPath<TFieldValues>, TNameLongitude extends FieldPath<TFieldValues>>(errorLatitude: FieldErrors<TFieldValues>[TNameLatitude], errorLongitude: FieldErrors<TFieldValues>[TNameLongitude]): string | undefined {
  if (errorLongitude && errorLatitude) {
    if (errorLatitude.message === errorLongitude.message) {
      return String(errorLatitude.message);
    } else {
      return `2 errors: "${errorLatitude.message}" and "${errorLongitude.message}"`
    }
  }

  if (errorLatitude) return String(errorLatitude.message);
  if (errorLongitude) return String(errorLongitude.message);

  return undefined;
}

