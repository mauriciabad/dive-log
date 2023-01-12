import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import loginRequired from '../../../utils/loginRequired'
import { trpc } from '../../../utils/trpc'
import type { CustomNextPage } from '../../_app'
import { TbLogout, TbBook } from 'react-icons/tb'
import IconButton from '../../../components/IconButton'

const ProfilePage: CustomNextPage = () => {
  const { data: session } = useSession()
  const { data: dives } = trpc.dive.getUserDives.useQuery()

  const userImage =
    session?.user?.image ??
    `https://avatars.dicebear.com/api/avataaars/${session?.user?.id}.svg`

  return (
    <>
      <Image
        className="h-8 w-8 rounded-full"
        src={userImage}
        alt=""
        height={32}
        width={32}
      />
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>

      <IconButton
        onClick={() => signOut({ callbackUrl: '/' })}
        text="Sign out"
        Icon={TbLogout}
      />

      <h3 className="mt-6 text-2xl font-bold">Dives list</h3>
      <IconButton href="/user/dives" text="Go to my dives" Icon={TbBook} />

      {!dives ? (
        <p className="text-2xl">Loading dives...</p>
      ) : (
        <ul>
          {dives.map((dive) => (
            <li key={dive.id}>
              <span>#{dive.diveNumber}</span> at
              <span>{dive.startDateTime.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

ProfilePage.title = 'Profile'

export default ProfilePage

export const getServerSideProps = loginRequired
