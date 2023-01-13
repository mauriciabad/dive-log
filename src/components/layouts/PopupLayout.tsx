import type { FC, ReactNode } from 'react'
import type { PageLayout } from '../../hooks/useWrapInLayout'
import bgRipples from '../../assets/backgrounds/ripples.png'

export type LayoutProps = {
  children?: ReactNode | ReactNode[]
}

const PopupLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center p-2"
      style={{ backgroundImage: `url(${bgRipples.src})` }}
    >
      <div className="xs:p-12 w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        {children}
      </div>
    </main>
  )
}

export const PopupCustomLayout: PageLayout<LayoutProps> = (page, props) => (
  <PopupLayout {...props}>{page}</PopupLayout>
)

export default PopupLayout
