import type { NextPage } from "next";
import type { FC, ReactElement, ReactNode } from "react";
import Layout from "../components/layouts/Layout";

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  customLayout?: (page: ReactElement) => ReactNode
  title?: string
}

export function useWrapInLayout<T extends Record<string, unknown>>(Component: CustomNextPage | NextPage) {
  const originalTitle = 'title' in Component && Component.title || undefined;
  const wrapInLayout = 'customLayout' in Component && Component.customLayout
    ? Component.customLayout
    : (page: ReactElement) => <Layout title={originalTitle}>{page}</Layout>
  const title = originalTitle ? `${originalTitle} | Dive Log` : 'Dive Log'
  const ComponentWrappedInLayout: FC<{ pageProps: T }> = ({ pageProps }) => <>{wrapInLayout(<Component {...pageProps} />)}</>

  return { originalTitle, title, ComponentWrappedInLayout }
}
