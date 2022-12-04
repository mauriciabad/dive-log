import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";

const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      <h1 className="text-3xl font-bold">Dives list</h1>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href="/user/dives/new"
      >
        + New dive
      </Link>
      {!dives
        ? <p className="text-2xl">Loading dives...</p>
        : dives.map((dive) =>
          <pre key={dive.id} className="text-xs bg-white/20 w-full max-w-md p-8 overflow-auto rounded-xl">{JSON.stringify(dive, null, 2)}</pre>
        )}
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