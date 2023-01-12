import type { CustomNextPage } from '../_app'
import loginRequired from '../../utils/loginRequired'
import IconButton from '../../components/IconButton'
import { TbBook } from 'react-icons/tb'

const HomePage: CustomNextPage = () => {
  return (
    <>
      <div className="flex h-96 flex-col items-center justify-center">
        <p className="mb-12 text-center text-4xl font-light text-gray-700 sm:text-5xl">
          Welcome
        </p>
        <IconButton href="/user/dives" text="Go to my dives" Icon={TbBook} />
      </div>
    </>
  )
}

HomePage.title = 'Home'

export default HomePage

export const getServerSideProps = loginRequired
