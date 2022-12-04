import type { GetServerSideProps } from "next";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { getSession } from "next-auth/react";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dive log</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-row gap-8 items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/user/dives"
        >
          Dives page
        </Link>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/user/profile"
        >
          Profile page
        </Link>
      </main>
    </>
  );
};

export default Home;

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