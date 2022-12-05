import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import type { CustomNextPage } from "./_app";

const Landing: CustomNextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <main className="flex min-h-screen flex-col gap-8 items-center justify-center text-white bg-gradient-to-b from-sky-600 to-indigo-800">
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


        <div className="absolute inset-x-0 bottom-1 text-center text-xs">
          <Link
            className="underline"
            href="/terms-of-service"
          >
            Terms of service
          </Link>
          &nbsp;|&nbsp;
          <Link
            className="underline"
            href="/privacy-policy"
          >
            Privacy policy
          </Link>
        </div>
      </main>
    </>
  );
};

Landing.title = 'Easy to use Dive Log'

export default Landing;

Landing.customLayout = (page) => page
