import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";

const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      <h1 className="text-3xl font-bold">Dives list</h1>
      {!dives ? <p className="text-2xl">Loading dives...</p> : dives.map((dive) => <div key={dive.id}>
        <p className="text-2xl">{JSON.stringify(dive, null, 2)}</p>
      </div>)}
    </>
  );
};

Dives.title = 'Dives'

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