import type { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { TbLogin } from "react-icons/tb";
import IconButton from "../components/IconButton";
import type { CustomNextPage } from "./_app";
import bgRipples from '../assets/backgrounds/ripples.png'

const Login: CustomNextPage = () => {

  return <>
    <main className="h-screen flex flex-col items-center justify-center p-2" style={{ backgroundImage: `url(${bgRipples.src})` }}>
      <div className="bg-white rounded-xl p-8 xs:p-12 text-center shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <p>To acces the application you need to be registered</p>

        <IconButton
          className="mt-8"
          onClick={() => signIn(undefined, { callbackUrl: '/user' })}
          text="Sign in/Log in"
          Icon={TbLogin} />

      </div>
    </main>
  </>
}

Login.title = 'Login'

Login.customLayout = (page) => page

export default Login;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/user',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}