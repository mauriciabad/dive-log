
import type { ReactNode } from "react";


interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {

  return (
    <>

      <main className="flex min-h-screen flex-col gap-8 items-center justify-center text-white bg-gradient-to-b from-sky-600 to-indigo-800">
        {children}
      </main>
    </>
  )
}
