import { TbChevronLeft, TbRefresh } from 'react-icons/tb'
import bgRipples from '../assets/backgrounds/ripples.png'
import IconButton from '../components/IconButton'
import NoLayout from '../components/layouts/NoLayout'
import type { CustomNextPage } from '../hooks/useWrapInLayout'

const NotFoundPage: CustomNextPage = () => {
  return (
    <>
      <main
        className="flex h-screen flex-col items-center justify-center p-2"
        style={{ backgroundImage: `url(${bgRipples.src})` }}
      >
        <div className="xs:p-12 w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
          <h1 className="mb-4 text-3xl font-bold">There's no internet</h1>

          <p className="text-base">You are offline.</p>
          <p className="text-base">
            Check your internet connection and refresh the page.
          </p>
          <IconButton
            className="mt-8"
            onClick={() => {
              location.reload()
            }}
            text="Refresh"
            Icon={TbRefresh}
          />
        </div>
      </main>
    </>
  )
}

NotFoundPage.title = 'Page not found'

export default NotFoundPage

NotFoundPage.customLayout = NoLayout
