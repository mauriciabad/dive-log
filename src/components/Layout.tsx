import type { ReactNode } from "react";
import { Disclosure } from '@headlessui/react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {
  children: ReactNode
  title?: string
}

const navigation = [
  { name: 'Dives', href: '/user/dives' },
  { name: 'Profile', href: '/user/profile' },
]

export default function Layout({ children, title }: Props) {
  const router = useRouter()

  const { data: session } = useSession();

  const userImage = session?.user?.image ?? `https://avatars.dicebear.com/api/avataaars/${session?.user?.id}.svg`

  return (
    <>
      <header>
        <Disclosure as="nav" className="bg-white text-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
                <div className="flex h-16 items-center">
                  <div className="flex items-center">

                    <Link className="flex-shrink-0 " href="/user">
                      <Logo type="outline" className="text-gray-700" />
                    </Link>

                    {title &&
                      <h1 className="text-lg font-medium text-gray-900 sm:hidden ml-4">{title}</h1>
                    }

                    <div className="hidden sm:block ml-8">
                      <div className="flex items-center space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames({
                              'text-gray-900': item.href === router.route,
                            }, "text-base font-medium text-gray-500 hover:text-gray-900 px-4 py-2 -mx-4 -my-2 rounded-full flex items-center")}
                            aria-current={item.href === router.route ? 'page' : undefined}
                          >
                            {item.href === router.route && <div className="bg-blue-400 h-1.5 w-1.5 rounded-full mr-1" />}
                            {item.name}
                          </a>
                        ))}
                      </div>

                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="ml-4 flex items-center sm:ml-6">
                      <div className="relative ml-3">
                        <Link href="/user/profile" className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 ">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={userImage} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex sm:hidden ml-2">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900">
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
                <div className="border-t-2 border-gray-100 mx-4" />

                <div className="space-y-2 px-4 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        "text-base font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 py-2 px-4 rounded-md flex items-center",
                        {
                          'text-gray-900 bg-gray-100': item.href === router.route,
                        })
                      }
                      aria-current={item.href === router.route ? 'page' : undefined}
                    >
                      {item.href === router.route && <div className="bg-blue-400 h-1.5 w-1.5 rounded-full -ml-2.5 mr-1" />}
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="border-t-2 border-gray-100 mx-4" />

                <div className="shadow-xl pt-4 px-4 pb-3">
                  <Disclosure.Button
                    as="a"
                    href="/user/profile"
                    className="flex items-center rounded-full"
                  >
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userImage} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-gray-900">{session?.user?.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-500">{session?.user?.email}</div>
                    </div>
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {title &&
          <div className="bg-white hidden sm:block">
            <h1 className="text-3xl mx-auto max-w-5xl pt-4 pb-4 px-4 sm:px-6 md:px-8 font-bold tracking-wide text-gray-900">{title}</h1>
          </div>
        }
      </header>
      <main className="min-h-full">
        <div className="mx-auto max-w-5xl py-4 px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </main>
    </>
  )
}
