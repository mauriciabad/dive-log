import type { GetServerSideProps } from "next";
import Link from "next/link";
import { getSession } from "next-auth/react";
import type { CustomNextPage } from "../_app";

const Home: CustomNextPage = () => {

  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
        href="/user/dives"
      >
        Dives page
      </Link>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-black/20"
        href="/user/profile"
      >
        Profile page
      </Link>
    </>
  );
};

Home.title = 'Home'

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