import type { AppProps } from "next/app";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import type { NextPage } from "next";
import Layout from "../components/layout";
import type { ReactElement, ReactNode } from "react";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  customLayout?: (page: ReactElement) => ReactNode
  title?: string
}

type AppPropsWithLayout = AppProps & {
  Component: CustomNextPage | NextPage
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const wrapInLayout = 'customLayout' in Component && Component.customLayout ? Component.customLayout : (page: ReactElement) => <Layout>{page}</Layout>
  const title = 'title' in Component && Component.title ? `${Component.title} | Dive Log` : 'Dive Log'

  return (
    <SessionProvider session={session}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {wrapInLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
