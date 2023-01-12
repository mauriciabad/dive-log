import { trpc } from '../../../utils/trpc'
import type { CustomNextPage } from '../../../hooks/useWrapInLayout'
import FabButton from '../../../components/FabButton'
import DiveCard from '../../../components/DiveCard'
import WaveAnimation from '../../../components/WaveAnimation'
import { TbPlus } from 'react-icons/tb'
import loginRequired from '../../../utils/loginRequired'
import IconButton from '../../../components/IconButton'
const DivesPage: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery()

  return (
    <>
      {dives ? (
        <>
          {dives.length ? (
            <div className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]">
              {dives.map((dive) => (
                <DiveCard dive={dive} key={dive.id} />
              ))}
            </div>
          ) : (
            <div className="flex h-96 flex-col items-center justify-center">
              <p className="mb-12 text-center text-4xl font-light text-gray-700 sm:text-5xl">
                You have 0 dives
              </p>
              <IconButton
                href="/user/dives/new"
                text="Create your first dive"
                Icon={TbPlus}
              />
            </div>
          )}

          <div className="box-content h-16 pt-6" />
          <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-5xl p-6 text-right">
            <FabButton href="/user/dives/new" className="sm:h-24 sm:w-24" />
          </div>
        </>
      ) : (
        <>
          <div className="flex h-96 flex-col items-center justify-center overflow-hidden">
            <WaveAnimation className="max-w-[125vw]" />
            <p className="text-2xl">Loading...</p>
          </div>
        </>
      )}
    </>
  )
}

DivesPage.title = 'My dives'

export default DivesPage

export const getServerSideProps = loginRequired
