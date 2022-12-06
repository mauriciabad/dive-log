import type { CustomNextPage } from "../_app";
import loginRequired from "../../utils/loginRequired";
import IconButton from "../../components/IconButton";
import { TbBook } from 'react-icons/tb'

const Home: CustomNextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-96">
        <p className="text-4xl sm:text-5xl mb-12 font-light text-gray-700 text-center">Welcome</p>
        <IconButton href="/user/dives" text="Go to my dives" Icon={TbBook} />
      </div>
    </>
  );
};

Home.title = 'Home'

export default Home;

export const getServerSideProps = loginRequired
