import type { NextPage } from 'next'
import type { FC, ReactElement, ReactNode } from 'react'
import { DefaultCustomLayout } from '../components/layouts/DefaultLayout'

export type PageLayout<
  Props extends Record<string | number | symbol, any> = {}
> = (children: ReactElement, props: Omit<Props, 'children'>) => ReactElement

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  customLayout?: PageLayout
  title?: string
}

export function useWrapInLayout<PageProps extends Record<string, unknown>>(
  Component: CustomNextPage | NextPage
) {
  const originalTitle = ('title' in Component && Component.title) || undefined
  const htmlTitle = originalTitle ? `${originalTitle} | Dive Log` : 'Dive Log'

  const ComponentWrappedInLayout: FC<PageProps> = (pageProps) => {
    const children = <Component {...pageProps} />

    if ('customLayout' in Component && Component.customLayout) {
      return Component.customLayout(children, {})
    } else {
      return DefaultCustomLayout(children, { title: originalTitle })
    }
  }

  return { originalTitle, htmlTitle, ComponentWrappedInLayout }
}
