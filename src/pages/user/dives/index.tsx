import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../../hooks/useWrapInLayout";
import FabButton from '../../../components/FabButton'
import DiveCard from '../../../components/DiveCard'
import WaveAnimation from '../../../components/WaveAnimation'
import { TbPlus } from 'react-icons/tb'
import loginRequired from "../../../utils/loginRequired";
import IconButton from "../../../components/IconButton";
const DivesPage: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      {dives ?
        <>
          {
            dives.length
              ?
              <div
                className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]"
              >
                {dives.map((dive) => <DiveCard dive={dive} key={dive.id} />)}
              </div>
              :
              <div className="flex flex-col items-center justify-center h-96">
                <p className="text-4xl sm:text-5xl mb-12 font-light text-gray-700 text-center">You have 0 dives</p>
                <IconButton href="/user/dives/new" text="Create your first dive" Icon={TbPlus} />
              </div>
          }

          <div className="h-16 pt-6 box-content" />
          <div className="fixed bottom-0 left-0 right-0 p-6 max-w-5xl mx-auto text-right">
            <FabButton href="/user/dives/new" className="sm:h-24 sm:w-24" />
          </div>
        </> : <>
          <div className="flex flex-col items-center justify-center h-96 overflow-hidden">
            <WaveAnimation className="max-w-[125vw]" />
            <p className="text-2xl">Loading...</p>
          </div>
        </>
      }
    </>
  );
};

DivesPage.title = 'My dives'

export default DivesPage;


export const getServerSideProps = loginRequired
