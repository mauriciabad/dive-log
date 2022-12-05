import type { ReactNode } from "react";
import { Disclosure } from '@headlessui/react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSession } from "next-auth/react";
import brandImage from '../assets/brand-image-round-corners.png'
import Link from "next/link";

interface Props {
  children: ReactNode
  title?: string
}

const navigation = [
  { name: 'Dives', href: '/user/dives', current: false },
]

export default function Layout({ children, title }: Props) {

  const { data: session } = useSession();

  return (
    <><div className="min-h-full">
      <Disclosure as="nav" className="bg-sky-700 text-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center">
                <div className="flex items-center">
                  <Link className="flex-shrink-0" href="/user">
                    <img
                      className="h-8 w-8"
                      src={brandImage.src}
                      alt="Logo"
                    />
                  </Link>
                  {title &&
                    <h1 className="sm:hidden ml-4 text-lg tracking-tight">{title}</h1>
                    }
                  <div className="hidden sm:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={(
                            item.current
                              ? ' bg-gray-900 text-white '
                              : ' text-white hover:bg-sky-800 hover:text-white ') +
                            'px-3 py-2 rounded-md text-sm font-medium'
                          }
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="ml-4 flex items-center sm:ml-6">
                    <div className="relative ml-3">
                      <Link href="/user/profile" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={session?.user?.image ?? ''} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex sm:hidden ml-2">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={(
                      item.current ? ' bg-gray-900 text-white ' : ' text-white hover:bg-sky-800 hover:text-white ') +
                      'block px-3 py-2 rounded-md text-base font-medium'
                    }
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 px-5 pb-3">
                <Disclosure.Button
                    as="a"
                    href="/user/profile"
                    className="flex items-center"
                  >
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={session?.user?.image ?? ''} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{session?.user?.name}</div>
                    <div className="text-sm font-medium leading-none text-white/70">{session?.user?.email}</div>
                  </div>
                  </Disclosure.Button>
                </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {title &&
        <header className="bg-white shadow hidden sm:block">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          </div>
        </header>
        }
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
    </>
  )
}
