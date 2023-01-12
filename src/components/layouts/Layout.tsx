import type { ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Logo'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { env } from '../../env/client.mjs'

interface Props {
  children: ReactNode
  title?: string
}

const navigation = [
  { name: 'Dives', href: '/user/dives' },
  { name: 'Dive sites', href: '/user/dive-sites' },
  { name: 'Profile', href: '/user/profile' },
]

export default function Layout({ children, title }: Props) {
  const router = useRouter()

  const { data: session } = useSession()

  const userImage =
    session?.user?.image ??
    `https://avatars.dicebear.com/api/avataaars/${session?.user?.id}.svg`

  return (
    <>
      <header className="sticky top-0 shadow-sm sm:relative sm:shadow-none">
        <Disclosure as="nav" className="bg-white text-black">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
                <div className="flex h-16 items-center">
                  <div className="flex items-center">
                    <Link className="flex-shrink-0 " href="/user">
                      <Logo type="outline" className="text-gray-700" />
                    </Link>

                    {title && (
                      <h1 className="ml-4 text-lg font-medium text-gray-900 sm:hidden">
                        {title}
                      </h1>
                    )}

                    <div className="ml-8 hidden sm:block">
                      <div className="flex items-center space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              {
                                'text-gray-900': item.href === router.route,
                              },
                              '-mx-4 -my-2 flex items-center rounded-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900'
                            )}
                            aria-current={
                              item.href === router.route ? 'page' : undefined
                            }
                          >
                            {item.href === router.route && (
                              <div className="mr-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                            )}
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center">
                    {env.NEXT_PUBLIC_NODE_ENV !== 'production' && (
                      <span
                        className={classNames(
                          'ml-4 -mr-4 rounded-md border-2 border-gray-900/25 bg-gray-200 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:ml-6 sm:-mr-6',
                          {
                            'border-emerald-900/25 bg-emerald-200 text-emerald-900':
                              env.NEXT_PUBLIC_DATABASE_ENV === 'development',
                            'border-blue-900/25 bg-blue-200 text-blue-900':
                              env.NEXT_PUBLIC_DATABASE_ENV === 'test',
                            'border-red-900/25 bg-red-200 text-red-900':
                              env.NEXT_PUBLIC_DATABASE_ENV === 'production',
                          }
                        )}
                        title="This is only visible when not in production"
                      >
                        {env.NEXT_PUBLIC_DATABASE_ENV === 'development'
                          ? 'dev'
                          : env.NEXT_PUBLIC_DATABASE_ENV === 'production'
                          ? 'prod'
                          : env.NEXT_PUBLIC_DATABASE_ENV}
                      </span>
                    )}

                    <div className="ml-4 flex items-center sm:ml-6">
                      <div className="relative ml-3 shrink-0">
                        <Link
                          href="/user/profile"
                          className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 "
                        >
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={userImage}
                            alt=""
                            height={32}
                            width={32}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 ml-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <HiOutlineX
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <HiOutlineMenu
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="mx-4 border-t-2 border-gray-100" />

                <div className="space-y-2 px-4 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        'flex items-center rounded-md bg-gray-50 py-2 px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900',
                        {
                          'bg-gray-100 text-gray-900':
                            item.href === router.route,
                        }
                      )}
                      aria-current={
                        item.href === router.route ? 'page' : undefined
                      }
                    >
                      {item.href === router.route && (
                        <div className="-ml-2.5 mr-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      )}
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>

                <div className="mx-4 border-t-2 border-gray-100" />

                <div className="px-4 pt-4 pb-3 shadow-xl">
                  <Disclosure.Button
                    as="a"
                    href="/user/profile"
                    className="flex items-center rounded-full"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={userImage}
                        alt=""
                        height={32}
                        width={32}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-gray-900">
                        {session?.user?.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-500">
                        {session?.user?.email}
                      </div>
                    </div>
                  </Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {title && (
          <div className="hidden bg-white sm:block">
            <h1 className="mx-auto max-w-5xl px-4 pt-4 pb-4 text-3xl font-bold tracking-wide text-gray-900 sm:px-6 md:px-8">
              {title}
            </h1>
          </div>
        )}
      </header>
      <main className="min-h-full">
        <div className="mx-auto max-w-5xl py-4 px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </main>
    </>
  )
}
