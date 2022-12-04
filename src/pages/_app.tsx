import type { AppProps } from "next/app";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import type { NextPage } from "next";
import Layout from "../components/layout";
import type { ReactElement, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  customLayout: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | NextPage
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const wrapInLayout = 'customLayout' in Component ? Component.customLayout : (page: ReactElement) => <Layout>{page}</Layout>

  return (
    <SessionProvider session={session}>
      {wrapInLayout(
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
