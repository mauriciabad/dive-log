import { TbChevronLeft } from 'react-icons/tb'
import IconButton from '../components/IconButton'
import NoLayout from '../components/layouts/NoLayout'
import type { CustomNextPage } from '../hooks/useWrapInLayout'

const TermsOfServicePage: CustomNextPage = () => {
  return (
    <>
      <main className="min-h-screen bg-white px-6 py-12 sm:py-24 sm:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-12 text-4xl font-bold">Terms of service</h1>

          <ul className="list-outside list-disc space-y-2 pl-4">
            <li>This app allows anyone to manage a regestry of their dives.</li>
            <li>The information we store is only visible to the owner user.</li>
            <li>
              For further information contact{' '}
              <a href="mailto:hello@mauriciabad.com">hello@mauriciabad.com</a>
            </li>
          </ul>

          <IconButton
            className="mt-12"
            href="/"
            text="Go to home page"
            Icon={TbChevronLeft}
          />
        </div>
      </main>
    </>
  )
}

TermsOfServicePage.title = 'Terms of service'

export default TermsOfServicePage

TermsOfServicePage.customLayout = NoLayout
