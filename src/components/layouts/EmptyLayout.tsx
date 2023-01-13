import type { FC, ReactNode } from 'react'
import type { PageLayout } from '../../hooks/useWrapInLayout'

export type LayoutProps = {
  children?: ReactNode | ReactNode[]
}

const EmptyLayout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}
export const EmptyCustomLayout: PageLayout<LayoutProps> = (page, props) => (
  <EmptyLayout {...props}>{page}</EmptyLayout>
)

export default EmptyLayout
