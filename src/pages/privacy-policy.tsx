import Link from "next/link";
import type { CustomNextPage } from "./_app";

const PrivacyPolicy: CustomNextPage = () => {

  return <>
    <h1 className="text-3xl font-bold">Privacy policy</h1>
    <p>This app allows anyone to manage a regestry of their dives.</p>
    <p>The information we store is only visible to the owner user.</p>
    <p>We only use your information for processing and displaying it to you in the application.</p>
    <p>To delete all your data just delete your account</p>

    <Link
      className="inline-block rounded-full bg-black/20 px-10 py-3 font-semibold no-underline transition hover:bg-black/30"
      href="/"
    >Go to home page</Link>
  </>
}

PrivacyPolicy.title = 'Privacy policy'

export default PrivacyPolicy;
