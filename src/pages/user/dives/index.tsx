import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";
import FabButton from '../../../components/FabButton'
import DiveCard from '../../../components/DiveCard'

const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      <div
        className="grid grid-flow-row gap-4"
        style={{ 'grid-template-columns': 'repeat(auto-fit, minmax(20rem, 1fr))' }}
      >
        {dives?.map((dive) =>
          <DiveCard dive={dive} key={dive.id} />)
          ??
          <p className="text-2xl">Loading dives...</p>}
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