import { TbRefresh } from 'react-icons/tb'
import IconButton from '../components/IconButton'
import { PopupCustomLayout } from '../components/layouts/PopupLayout'
import type { CustomNextPage } from '../hooks/useWrapInLayout'

const NotFoundPage: CustomNextPage = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">There&apos;s no internet</h1>

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
    </>
  )
}

NotFoundPage.title = 'Page not found'

export default NotFoundPage

NotFoundPage.customLayout = PopupCustomLayout
