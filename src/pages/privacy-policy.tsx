import { TbChevronLeft } from "react-icons/tb";
import IconButton from "../components/IconButton";
import type { CustomNextPage } from "./_app";

const PrivacyPolicy: CustomNextPage = () => {

  return <>
    <main className="px-6 py-12 sm:py-24 sm:px-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-12">Privacy policy</h1>

        <ul className="list-disc pl-4 list-outside space-y-2">
          <li className="text-base">This app allows anyone to manage a regestry of their dives.</li>
          <li className="text-base">The information we store is only visible to the owner user.</li>
          <li className="text-base">We only use your information for processing and displaying it to you in the application.</li>
          <li className="text-base">To delete all your data just delete your account</li>
          <li className="text-base">For further information contact <a href="mailto:hello@mauriciabad.com">hello@mauriciabad.com</a></li>
        </ul>

        <IconButton className="mt-12" href="/" text="Go to home page" Icon={TbChevronLeft} />
      </div>
    </main>
  </>
}

PrivacyPolicy.title = 'Privacy policy'

export default PrivacyPolicy;

PrivacyPolicy.customLayout = (page) => page
