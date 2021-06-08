import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/layout'
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/const'
import { fetchEntry, fetchAllSlugs } from '../lib/api'

export default function Page({ entry, preview }) {
  const router = useRouter()
  if (!router.isFallback && !entry) {return <p>Error</p>}

  console.log(entry)

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          {APP_NAME}
        </title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <h1>
        asso4077/nextjs-contentful-template: entry page
      </h1>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await fetchEntry(params.slug, preview)

  return {
    props: {
      preview,
      entry: data ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await fetchAllSlugs()

  return {
    paths: allPosts.map(path => `/${path.fields.slug}`) ?? [],
    fallback: true,
  }
}
