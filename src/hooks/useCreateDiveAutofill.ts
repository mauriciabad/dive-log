import { useCallback, useEffect, useState } from 'react'
import type { Control, Path, UseFormSetValue } from 'react-hook-form'
import { trpc } from '../utils/trpc'
import type { z } from 'zod'
import type { CreateDiveSchema } from '../validators/Dive'
import type { Dive } from '@prisma/client'

type Inputs = z.input<typeof CreateDiveSchema>

export function useCreateDiveAutofill({
  control,
  setValue,
}: {
  setValue: UseFormSetValue<Inputs>
  control: Control<Inputs>
}) {
  const [isAutofilled, setIsAutofilled] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { data: lastDive, isSuccess } = trpc.dive.getLastDive.useQuery()

  const setValueIfNotDirty = useCallback(
    (
      internalLabel: keyof Dive & Path<Inputs>,
      value: string | number | Date | undefined
    ) => {
      if (!control.getFieldState(internalLabel).isDirty) {
        setValue(internalLabel, value)
      }
    },
    [control, setValue]
  )

  setValueIfNotDirty('startDateTime', new Date())

  useEffect(() => {
    if (isSuccess) {
      if (lastDive) {
        setValueIfNotDirty('diveNumber', lastDive['diveNumber'] + 1)

        const fieldsToAutofill = [
          'type',
          'waterMinimumTemperature',
          'waterAverageTemperature',
          'waterMaximumTemperature',
          'waterBody',
          'waterType',
          'waterEntry',
          'waterCurrent',
          'waterSurface',
          'weather',
          'airTemperature',
          'weight',
          'cylinderVolume',
          'cylinderMaterial',
        ] as const
        for (const internalLabel of fieldsToAutofill) {
          setValueIfNotDirty(
            internalLabel,
            lastDive[internalLabel] ?? undefined
          )
        }

        setIsAutofilled(true)
      } else {
        setValueIfNotDirty('diveNumber', 1)
      }
    }
    setIsLoading(false)
  }, [isSuccess, lastDive, setValueIfNotDirty])

  return {
    isLoading,
    isAutofilled,
  }
}
