import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { FC, ReactNode } from 'react'

const CustomSessionProvider: FC<{
  children: ReactNode | ReactNode[]
  session: Session | null
}> = ({ children, session }) => {
  return (
    <SessionProvider
      session={session}
      refetchWhenOffline={false}
      refetchInterval={0}
      refetchOnWindowFocus={
        typeof navigator !== 'undefined' && navigator.onLine
      }
    >
      {children}
    </SessionProvider>
  )
}

export default CustomSessionProvider
