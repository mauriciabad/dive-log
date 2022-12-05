import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import loginRequired from "../../../utils/loginRequired";
import { trpc } from "../../../utils/trpc";
import type { CustomNextPage } from "../../_app";

const Profile: CustomNextPage = () => {
  const { data: session } = useSession();
  const { data: dives } = trpc.dive.getUserDives.useQuery()

  const userImage = session?.user?.image ?? `https://avatars.dicebear.com/api/avataaars/${session?.user?.id}.svg`


  return <>

    <Image className="h-8 w-8 rounded-full" src={userImage} alt="" height={32} width={32} />
    <p>Name : {session?.user?.name}</p>
    <p>Email : {session?.user?.email}</p>
    <button
      className="inline-block rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      onClick={() => signOut({ callbackUrl: '/' })}
    >Sign out</button>

    <h3 className="text-2xl font-bold">Dives list</h3>
    <Link
      className="inline-block rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      href="/user/dives"
    >
      Dives page
    </Link>

    {!dives ? <p className="text-2xl">Loading dives...</p> : <ul>
      {dives.map((dive) => <li key={dive.id}><span>{dive.date.toLocaleString()}</span> - <span>{dive.locationName}</span></li>)}
    </ul>
    }
  </>
}

Profile.title = 'Profile'

export default Profile;

export const getServerSideProps = loginRequired
