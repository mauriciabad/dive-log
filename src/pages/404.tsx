import { TbChevronLeft } from 'react-icons/tb'
import IconButton from '../components/IconButton'
import { PopupCustomLayout } from '../components/layouts/PopupLayout'
import type { CustomNextPage } from '../hooks/useWrapInLayout'

const NotFoundPage: CustomNextPage = () => {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">404 Not found</h1>

      <p className="text-base">This page doesn&apos;t exist.</p>
      <p className="text-base">Check that the URL is correct.</p>
      <IconButton
        className="mt-8"
        href="/"
        text="Go to home page"
        Icon={TbChevronLeft}
      />
    </>
  )
}

NotFoundPage.title = 'Page not found'

export default NotFoundPage

NotFoundPage.customLayout = PopupCustomLayout
