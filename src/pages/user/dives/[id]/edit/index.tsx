import type { CustomNextPage } from '../../../../../hooks/useWrapInLayout'
import { useRouter } from 'next/router'
import { trpc } from '../../../../../utils/trpc'
import ErrorBox from '../../../../../components/ErrorBox'
import { getParameter } from '../../../../../utils/router'
import WaveAnimation from '../../../../../components/WaveAnimation'

const EditDivePage: CustomNextPage = () => {
  const router = useRouter()
  const id = getParameter(router, 'id')
  if (!id)
    return (
      <ErrorBox message="Invalid dive id, check that the url is correct." />
    )

  const { data: dive, error } = trpc.dive.getDive.useQuery({ id })

  return (
    <>
      {error ? (
        <ErrorBox message={error?.message} />
      ) : dive ? (
        <div>
          <div className="col-span-12 h-96 py-6 text-center text-xl text-gray-800">
            In development...
            <br />
            Come back in some days.
          </div>
        </div>
      ) : (
        <div className="flex h-96 flex-col items-center justify-center overflow-hidden">
          <WaveAnimation className="max-w-[125vw]" />
          <p className="text-2xl">Loading...</p>
        </div>
      )}
    </>
  )
}

EditDivePage.title = 'Edit dive'

export default EditDivePage
