import type { FC } from "react";
import React from "react";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";
import FabButton from '../../../components/FabButton'
import WaveAnimation from '../../../components/WaveAnimation'
import { TbMapPin } from 'react-icons/tb'
import loginRequired from "../../../utils/loginRequired";

const DiveSitesPage: CustomNextPage = () => {
  const { data: userCreatedDiveSites } = trpc.diveSite.getUserCreatedDiveSites.useQuery();
  const { data: userDivedDiveSites } = trpc.diveSite.getUserDivedDiveSites.useQuery();
  const { data: allPublicDiveSites } = trpc.diveSite.getAllPublicDiveSites.useQuery();

  return (
    <div>
      <div>
        <h2 className="text-2xl mb-2 mt-8">Dived in</h2>
        {userDivedDiveSites ?
          <>
            {
              userDivedDiveSites.length
                ?
                <div
                  className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]"
                >
                  {userDivedDiveSites.map((diveSite) =>
                    <div key={diveSite.id}>
                      <TbMapPin className="inline h-5 w-5 flex-shrink-0 text-gray-500 my-0.5 mr-1 box-content" />
                      <span className="text-base">{diveSite.name}</span>
                    </div>
                  )}
                </div>
                :
                <div className="flex flex-col items-center justify-center p-4 border-dashed border-2 border-gray-200 rounded-xl">
                  <p className="text-xl sm:text-lg text-gray-400 text-center">Empty</p>
                </div>
            }
          </> :
          <Loading />
        }
      </div>

      <div>
        <h2 className="text-2xl mb-2 mt-8">Created by me</h2>
        {userCreatedDiveSites ?
          <>
            {
              userCreatedDiveSites.length
                ?
                <div
                  className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]"
                >
                  {userCreatedDiveSites.map((diveSite) =>
                    <div key={diveSite.id}>
                      <TbMapPin className="inline h-5 w-5 flex-shrink-0 text-gray-500 my-0.5 mr-1 box-content" />
                      <span className="text-base">{diveSite.name}</span>
                    </div>
                  )}
                </div>
                :
                <div className="flex flex-col items-center justify-center p-4 border-dashed border-2 border-gray-200 rounded-xl">
                  <p className="text-xl sm:text-lg text-gray-400 text-center">Empty</p>
                </div>
            }
          </> :
          <Loading />
        }
      </div>

      <div>
        <h2 className="text-2xl mb-2 mt-8">All public dives</h2>
        {allPublicDiveSites ?
          <>
            {
              allPublicDiveSites.length
                ?
                <div
                  className="grid grid-flow-row gap-4 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]"
                >
                  {allPublicDiveSites.map((diveSite) =>
                    <div key={diveSite.id}>
                      <TbMapPin className="inline h-5 w-5 flex-shrink-0 text-gray-500 my-0.5 mr-1 box-content" />
                      <span className="text-base">{diveSite.name}</span>
                    </div>
                  )}
                </div>
                :
                <div className="flex flex-col items-center justify-center p-4 border-dashed border-2 border-gray-200 rounded-xl">
                  <p className="text-xl sm:text-lg text-gray-400 text-center">Empty</p>
                </div>
            }
          </> :
          <Loading />
        }

        <div className="fixed bottom-0 left-0 right-0 p-6 max-w-5xl mx-auto text-right">
          <FabButton href="/user/dive-sites/new" className="sm:h-24 sm:w-24" />
        </div>
      </div>
    </div>
  );
};

DiveSitesPage.title = 'My dive sites'

export default DiveSitesPage;

export const getServerSideProps = loginRequired

const Loading: FC = () => (<div className="flex flex-col items-center justify-center overflow-hidden">
  <WaveAnimation className="max-w-[125vw]" />
  <p className="text-2xl">Loading...</p>
</div>)