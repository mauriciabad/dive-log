import type { GetServerSideProps, NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";

const User: NextPage = () => {
  const { data: session } = useSession();
  const { data: dives } = trpc.dive.getUserDives.useQuery()

  return <>
  <p>Welcome {session?.user?.name}!</p>
  <button
        className="rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
        onClick={session ? () => signOut() : () => signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>

      <h3 className="text-2xl font-bold">Dives list</h3>
      {!dives ? <p className="text-2xl">Loading dives...</p> : dives.map((dive) => <div key={dive.id}>
        <p className="text-2xl">{ JSON.stringify(dive, null, 2) }</p>
      </div>)}
  </>
}

export default User;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const routeUserId = context.params?.id
  const sessionUserId = session?.user?.id

  if (sessionUserId !== routeUserId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { }
  }
}