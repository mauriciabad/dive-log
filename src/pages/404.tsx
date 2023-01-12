import { TbChevronLeft } from "react-icons/tb";
import bgRipples from '../assets/backgrounds/ripples.png';
import IconButton from "../components/IconButton";
import NoLayout from "../components/layouts/NoLayout";
import type { CustomNextPage } from "../hooks/useWrapInLayout";

const NotFoundPage: CustomNextPage = () => {
  return <>
    <main className="h-screen flex flex-col items-center justify-center p-2" style={{ backgroundImage: `url(${bgRipples.src})` }}>
      <div className="bg-white rounded-xl p-8 xs:p-12 text-center shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">404 Not found</h1>

        <p className="text-base">This page doesn&apos;t exist.</p>
        <p className="text-base">Check that the URL is correct.</p>
        <IconButton
          className="mt-8"
          href="/" text="Go to home page"
          Icon={TbChevronLeft} />

      </div>
    </main>
  </>
}

NotFoundPage.title = 'Page not found'

export default NotFoundPage;

NotFoundPage.customLayout = NoLayout
