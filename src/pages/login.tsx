import type { GetServerSideProps } from 'next'
import type { ClientSafeProvider } from 'next-auth/react'
import { getProviders, getSession, signIn } from 'next-auth/react'
import type { CustomNextPage } from './_app'
import bgRipples from '../assets/backgrounds/ripples.png'
import { TbLock } from 'react-icons/tb'
import Image from 'next/image'

interface Props {
  providers: ReturnType<typeof getProviders>
}

const LoginPage: CustomNextPage<Props> = ({ providers }) => {
  return (
    <>
      <main
        className="flex h-screen flex-col items-center justify-center max-sm:bg-white max-sm:!bg-none sm:p-2"
        style={{ backgroundImage: `url(${bgRipples.src})` }}
      >
        <div className="w-full max-w-md overflow-auto bg-white p-8 text-center sm:rounded-xl sm:p-12 sm:shadow-lg">
          <div className="mx-auto mb-2 inline-block rounded-full border-2 border-gray-300 p-4">
            <TbLock className="mx-auto h-8 w-8 text-gray-900" />
          </div>

          <p className="text-base">
            To acces the application you must be registered.
          </p>

          <div className="my-8 h-px bg-gray-200" />

          <h1 className="mb-6 text-3xl font-bold">Login with...</h1>

          <ul className="space-y-4">
            {Object.values(providers).map((provider: ClientSafeProvider) => (
              <li key={provider.name}>
                <button
                  onClick={() => signIn(provider.id)}
                  className="mx-auto flex w-full max-w-[16em] items-center gap-3 rounded-lg border border-gray-200 p-3 shadow outline-none ring-offset-2 focus-visible:ring-4 focus-visible:ring-blue-500"
                >
                  {
                    <Image
                      src={
                        provider.id === 'google'
                          ? '/logos/google.svg'
                          : provider.id === 'discord'
                          ? '/logos/discord.svg'
                          : provider.id === 'facebook'
                          ? '/logos/facebook.svg'
                          : provider.id === 'github'
                          ? '/logos/github.svg'
                          : provider.id === 'instagram'
                          ? '/logos/instagram.svg'
                          : ''
                      }
                      alt=""
                      width={32}
                      height={32}
                      className="shrink-0"
                    />
                  }
                  <span className="text-base leading-none">
                    <span className="whitespace-nowrap text-gray-800">
                      Sign in with{' '}
                    </span>
                    <span> </span>
                    <strong className="font-medium">{provider.name}</strong>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

LoginPage.title = 'Login'

LoginPage.customLayout = (page) => page

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const url = context.req.url
    ? new URL(context.req.url, `http://${context.req.headers.host}`)
    : null
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
    props: { providers },
  }
}
