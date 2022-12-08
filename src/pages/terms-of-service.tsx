import { TbChevronLeft } from "react-icons/tb";
import IconButton from "../components/IconButton";
import type { CustomNextPage } from "./_app";

const TermsOfServicePage: CustomNextPage = () => {

  return <>
    <main className="px-6 py-12 sm:py-24 sm:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-12">Terms of service</h1>

        <ul className="list-disc pl-4 list-outside space-y-2">
          <li>This app allows anyone to manage a regestry of their dives.</li>
          <li>The information we store is only visible to the owner user.</li>
          <li>For further information contact <a href="mailto:hello@mauriciabad.com">hello@mauriciabad.com</a></li>
        </ul>

        <IconButton className="mt-12" href="/" text="Go to home page" Icon={TbChevronLeft} />
      </div>
    </main>
  </>
}

TermsOfServicePage.title = 'Terms of service'

export default TermsOfServicePage;

TermsOfServicePage.customLayout = (page) => page
