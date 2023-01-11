import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { AppProps } from "next/app";
import { type AppType } from "next/app";
import Head from "next/head";
import CustomPersistQueryClientProvider from "../components/providers/CustomPersistQueryClientProvider";
import CustomSessionProvider from "../components/providers/CustomSessionProvider";
import type { CustomNextPage } from "../hooks/useWrapInLayout";
import { useWrapInLayout } from "../hooks/useWrapInLayout";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import "../utils/timeAgoInitialization";

const MyApp: AppType<AppProps & {
  Component: CustomNextPage | NextPage
  session: Session | null
}> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
    const { title, ComponentWrappedInLayout } = useWrapInLayout(Component)

    return (
      <CustomSessionProvider session={session} >
        <CustomPersistQueryClientProvider>
          <Head>
            <title>{title}</title>
            <meta name="description" content="Easy to use Dive Logbook for Scuba Divers." />
            <meta name="theme-color" content="#ffffff" />

            <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
            <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: dark)" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" media="(prefers-color-scheme: light)" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-light-32x32.png" media="(prefers-color-scheme: dark)" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" media="(prefers-color-scheme: light)" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-light-16x16.png" media="(prefers-color-scheme: dark)" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
          <ComponentWrappedInLayout {...pageProps} />
        </CustomPersistQueryClientProvider>
      </CustomSessionProvider>
    );
  };

export default trpc.withTRPC(MyApp);
