import type { GetServerSideProps } from "next";
import type { ClientSafeProvider } from "next-auth/react";
import { getProviders, getSession, signIn } from "next-auth/react";
import type { CustomNextPage } from "./_app";
import bgRipples from '../assets/backgrounds/ripples.png'
import { TbLock } from 'react-icons/tb'
import Image from "next/image";

interface Props {
  providers: ReturnType<typeof getProviders>
}

const LoginPage: CustomNextPage<Props> = ({ providers }) => {

  return <>
    <main className="h-screen flex flex-col items-center justify-center sm:p-2 max-sm:!bg-none max-sm:bg-white" style={{ backgroundImage: `url(${bgRipples.src})` }}>
      <div className="bg-white sm:rounded-xl p-8 sm:p-12 text-center sm:shadow-lg max-w-md w-full overflow-auto">
        <div className="rounded-full p-4 inline-block mx-auto border-2 border-gray-300 mb-2">
          <TbLock className="mx-auto h-8 w-8 text-gray-900" />
        </div>

        <p className="text-base">To acces the application you must be registered.</p>

        <div className="h-px bg-gray-200 my-8" />

        <h1 className="text-3xl font-bold mb-6">Login with...</h1>

        <ul className="space-y-4">
          {Object.values(providers).map((provider: ClientSafeProvider) => (
            <li key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="p-3 gap-3 mx-auto rounded-lg shadow border border-gray-200 flex w-64 items-center outline-none focus-visible:ring-4 ring-offset-2 focus-visible:ring-blue-500"
              >
                {
                  <Image src={provider.id === 'google' ? '/logos/google.svg' :
                    provider.id === 'discord' ? '/logos/discord.svg' :
                      provider.id === 'facebook' ? '/logos/facebook.svg' :
                        provider.id === 'github' ? '/logos/github.svg' :
                          provider.id === 'instagram' ? '/logos/instagram.svg' : ''}
                    alt=""
                    width={32}
                    height={32} />}
                <span className="text-base">
                  <span className="text-gray-800">Sign in with</span>
                  &nbsp;
                  <strong className="font-medium">{provider.name}</strong>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  </>
}

LoginPage.title = 'Login'

LoginPage.customLayout = (page) => page

export default LoginPage;


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const url = context.req.url ? new URL(context.req.url, `http://${context.req.headers.host}`) : null;
  const callbackUrl = url?.searchParams.get('callbackUrl')

  if (session) {
    return {
      redirect: {
        destination: callbackUrl ?? '/user',
        permanent: false,
      },
    }
  }
  const providers = await getProviders()

  return {
    props: { providers }
  }
}