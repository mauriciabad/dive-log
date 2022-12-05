import Link from "next/link";
import type { CustomNextPage } from "../_app";
import loginRequired from "../../utils/loginRequired";

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

export const getServerSideProps = loginRequired
