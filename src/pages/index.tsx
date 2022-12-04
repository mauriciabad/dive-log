import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dive log</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col gap-8 items-center justify-center text-white bg-gradient-to-b from-[#2e026d] to-[#15162c]">

        <h1 className="text-3xl">Dive Log</h1>
        <p>Manage your dives!</p>

        {session ? <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/user"
        >
          Go to my dive log
        </Link> : <button
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          onClick={() => signIn(undefined, { callbackUrl: '/user' })}
        >
          Log In & Go to my dive log
        </button>}


      </main>
    </>
  );
};

export default Home;

