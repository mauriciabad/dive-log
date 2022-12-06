import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";
import FabButton from '../../../components/FabButton'
import DiveCard from '../../../components/DiveCard'
import WaveAnimation from '../../../components/WaveAnimation'
import Link from "next/link";
import { TbPlus } from 'react-icons/tb'
import loginRequired from "../../../utils/loginRequired";
import IconButton from "../../../components/IconButton";
const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      {dives ?
        <>
          <div
            className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]"
          >
            {
              dives.length
                ? dives.map((dive) => <DiveCard dive={dive} key={dive.id} />)
                :
                <div className="flex flex-col items-center justify-center h-96">
                  <p className="text-5xl mb-12 font-light text-gray-700">You have 0 dives</p>
                  <IconButton href="/user/dives/new" text="Create your first dive" Icon={TbPlus} />
                </div>
            }
          </div>

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

Dives.title = 'My dives'

export default Dives;


export const getServerSideProps = loginRequired
