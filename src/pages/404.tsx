import Link from "next/link";
import type { CustomNextPage } from "./_app";

const NotFoundPage: CustomNextPage = () => {

  return <>
    <h1>404 Not found</h1>
    <p>This page doesn&apos;t exist</p>
    <p>Check that the URL is correct</p>
    <Link
      className="inline-block rounded-full bg-black/10 px-10 py-3 font-semibold no-underline transition hover:bg-black/20"
      href="/"
    >
      Go to home page
    </Link>

  </>
}

export default NotFoundPage;
