import type { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { trpc } from "../../../utils/trpc";

const User: NextPage = () => {
  const { data: session } = useSession();
  const { data: dives } = trpc.dive.getUserDives.useQuery()

  return <>
    <p>Welcome {session?.user?.name}!</p>
    <button
      className="inline-block rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      onClick={() => signOut({ callbackUrl: '/' })}
    >Sign out</button>

    <h3 className="text-2xl font-bold">Dives list</h3>
    <Link
      className="inline-block rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      href="/user/dives"
    >
      Dives page
    </Link>

    {!dives ? <p className="text-2xl">Loading dives...</p> : <ul>
      {dives.map((dive) => <li key={dive.id}><span>{dive.date.toLocaleString()}</span> - <span>{dive.locationName}</span></li>)}
    </ul>
    }
  </>
}

export default User;

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