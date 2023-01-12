import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const url = context.req.url
    ? new URL(context.req.url, `http://${context.req.headers.host}`)
    : null

  if (!session) {
    return {
      redirect: {
        destination: url
          ? '/login?callbackUrl=' + encodeURIComponent(url.href)
          : '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default getServerSideProps
