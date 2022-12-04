import Link from "next/link";
import type { CustomNextPage } from "./_app";

const NotFoundPage: CustomNextPage = () => {

  return <>
    <h1 className="text-3xl font-bold">404 Not found</h1>
    <p>This page doesn&apos;t exist</p>
    <p>Check that the URL is correct</p>
    <Link
      className="inline-block rounded-full bg-black/20 px-10 py-3 font-semibold no-underline transition hover:bg-black/30"
      href="/"
    >Go to home page</Link>

  </>
}

NotFoundPage.title = 'Page not found'

export default NotFoundPage;
