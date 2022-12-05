import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";

const Dives: CustomNextPage = () => {
  const { data: dives } = trpc.dive.getUserDives.useQuery();

  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
        href="/user/dives/new"
      >
        + New dive
      </Link>
      {!dives
        ? <p className="text-2xl">Loading dives...</p>
        : dives.map((dive) =>
          <pre key={dive.id} className="text-xs bg-black/20 w-full max-w-md p-8 overflow-auto rounded-xl">{JSON.stringify(dive, null, 2)}</pre>
        )}
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