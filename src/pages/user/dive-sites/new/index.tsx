import React from 'react'
import { trpc } from '../../../../utils/trpc'
import type { CustomNextPage } from '../../../../hooks/useWrapInLayout'
import { type SubmitHandler, useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import loginRequired from '../../../../utils/loginRequired'
import { CreateDiveSiteSchema } from '../../../../validators/DiveSite'
import {
  TbDeviceFloppy,
  TbFile,
  TbInfoCircle,
  TbLink,
  TbMapPin,
  TbPaperclip,
  TbPhoto,
  TbPlus,
  TbTag,
  TbTrash,
} from 'react-icons/tb'
import IconButton from '../../../../components/IconButton'
import ErrorBox from '../../../../components/ErrorBox'
import type { z } from 'zod'
import FormSection from '../../../../components/FormSection'
import InputDiv from '../../../../components/inputs/InputDiv'
import { makeCustomInputMap } from '../../../../components/inputs/InputMap'
import {
  enumLabelsAsArray,
  enumLabels,
} from '../../../../parametrized-data/enumLabels'
import { makeCustomInputMultiline } from '../../../../components/inputs/InputMultiline'
import { makeCustomInputSelect } from '../../../../components/inputs/InputSelect'
import { makeCustomInputSimple } from '../../../../components/inputs/InputSimple'

type Inputs = z.input<typeof CreateDiveSiteSchema>

const CreateDivePage: CustomNextPage = () => {
  const router = useRouter()

  const createDiveSiteMutation = trpc.diveSite.createDiveSite.useMutation()

  const { handleSubmit, control, formState } = useForm<Inputs>({
    resolver: zodResolver(CreateDiveSiteSchema),
  })

  const makeCustomInputsProps = {
    control,
    errors: formState.errors,
    schema: CreateDiveSiteSchema,
    theme: 'outline',
  } as const
  const CustomInputSimple = makeCustomInputSimple(makeCustomInputsProps)
  const CustomInputSelect = makeCustomInputSelect(makeCustomInputsProps)
  const CustomInputMultiline = makeCustomInputMultiline(makeCustomInputsProps)
  const CustomInputMap = makeCustomInputMap(makeCustomInputsProps)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await createDiveSiteMutation.mutateAsync({ data })
    router.push('/user/dive-sites')
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormSection title="Basic" description="Essential information">
        <CustomInputSimple
          label="Name"
          internalLabel="name"
          Icon={TbTag}
          className="col-span-12"
        />

        <CustomInputMultiline
          label="Description"
          internalLabel="description"
          Icon={TbInfoCircle}
          className="col-span-12"
        />

        <CustomInputSimple
          label="Image"
          internalLabel="image"
          Icon={TbPhoto}
          className="col-span-12"
        />
      </FormSection>

      <FormSection
        title="Location"
        description="Aproximate place on the map where it's located."
      >
        <CustomInputMap
          label="Location"
          Icon={TbMapPin}
          internalLabelLatitude="latitude"
          internalLabelLongitude="longitude"
          className="col-span-12"
        />
      </FormSection>
      <FormSection title="Other" description="Non essential information">
        <div className="col-span-12">
          <InputDiv label="Attechments" Icon={TbPaperclip}>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="col-span-12 grid grid-cols-[repeat(6,1fr),auto] items-end gap-4 border-b-2 border-gray-200 p-4"
              >
                <CustomInputSimple
                  label="Title"
                  internalLabel={`links.${index}.title`}
                  Icon={TbTag}
                  className="col-span-4"
                />
                <CustomInputSelect
                  label="Type"
                  internalLabel={`links.${index}.type`}
                  Icon={TbFile}
                  data={enumLabelsAsArray(enumLabels.LinkType)}
                  displayValue={(enumLabel) => String(enumLabel?.label ?? '')}
                  exposedProperty="value"
                  className="col-span-3"
                />
                <CustomInputSimple
                  label="Link"
                  internalLabel={`links.${index}.link`}
                  Icon={TbLink}
                  className="col-span-3"
                />
                <CustomInputSimple
                  label="Thumbnail"
                  internalLabel={`links.${index}.thumbnail`}
                  Icon={TbPhoto}
                  className="col-span-3"
                />
                <IconButton
                  text="Delete"
                  onClick={() => remove(index)}
                  Icon={TbTrash}
                  onlyIcon
                />
              </div>
            ))}
            <div className="col-span-12 p-4 text-center">
              <IconButton
                text="Add attechment"
                onClick={() =>
                  append({
                    link: '',
                    type: 'OTHER',
                  })
                }
                Icon={TbPlus}
              />
            </div>
          </InputDiv>
        </div>
      </FormSection>

      <div className="flex justify-center">
        <IconButton
          text="Save"
          Icon={TbDeviceFloppy}
          onClick={handleSubmit(onSubmit)}
          loading={createDiveSiteMutation.isLoading}
          className="mt-8 flex px-8"
        />
      </div>

      {createDiveSiteMutation.error && (
        <ErrorBox
          message={createDiveSiteMutation.error.message}
          className="mt-4"
        />
      )}
    </form>
  )
}

CreateDivePage.title = 'New dive site'

export default CreateDivePage

export const getServerSideProps = loginRequired
