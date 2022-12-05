import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";
import FabButton from '../../../components/FabButton'

const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      <div className="space-y-4">
        {!dives
          ? <p className="text-2xl">Loading dives...</p>
          : dives.map((dive) =>
            <pre key={dive.id} className="text-xs bg-white shadow w-full max-w-md p-8 overflow-auto rounded-xl">{JSON.stringify(dive, null, 2)}</pre>
          )}
      </div>

      <div className="h-16 pt-6 box-content" />
      <div className="fixed bottom-0 left-0 right-0 p-6 max-w-5xl mx-auto text-right">
        <FabButton href="/user/dives/new" className="sm:h-24 sm:w-24" />
      </div>
    </>
  );
};

Dives.title = 'My dives'

export default Dives;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}