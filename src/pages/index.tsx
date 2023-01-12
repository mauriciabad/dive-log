import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import type { CustomNextPage } from '../hooks/useWrapInLayout'
import Logo from '../components/Logo'
import IconButton from '../components/IconButton'
import bgRipples from '../assets/backgrounds/ripples.png'
import NoLayout from '../components/layouts/NoLayout'

const LandingPage: CustomNextPage = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <main
        className="flex h-screen flex-col items-center justify-center p-8"
        style={{ backgroundImage: `url(${bgRipples.src})` }}
      >
        <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-lg sm:py-12">
          <Logo type="outline-lg" className="mx-auto h-24 w-24" />

          <h1 className="text-4xl font-bold tracking-wider">Dive Log</h1>

          <p className="my-8">Manage your dives!</p>

          {session ? (
            <IconButton href="/user" text="Go to my dive log" />
          ) : (
            <>
              <IconButton
                text="Log In & Go to my dive log"
                onClick={() => signIn(undefined, { callbackUrl: '/user' })}
              />
              {status === 'loading' && (
                <p className="mt-2 animate-pulse text-xs">
                  Loading user data...
                </p>
              )}
            </>
          )}

          <div className="absolute inset-x-0 bottom-1 text-center text-xs">
            <Link className="underline" href="/terms-of-service">
              Terms of service
            </Link>
            &nbsp;|&nbsp;
            <Link className="underline" href="/privacy-policy">
              Privacy policy
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

LandingPage.title = 'Easy to use Dive Log'

export default LandingPage

LandingPage.customLayout = NoLayout
