import { FC, ReactNode } from 'react'
import { PageLayout } from '../../hooks/useWrapInLayout'

export interface LayoutProps {
  children?: ReactNode | ReactNode[]
}

const EmptyLayout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}
export const EmptyCustomLayout: PageLayout<LayoutProps> = (page, props) => (
  <EmptyLayout {...props}>{page}</EmptyLayout>
)

export default EmptyLayout
