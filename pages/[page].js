import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/layout'
import { APP_NAME, HOME_OG_IMAGE_URL } from '../lib/const'
import { fetchEntries, fetchAllSlugs, fetchIndex } from '../lib/api'

export default function Page({ entry, preview, index }) {
  const router = useRouter()
  if (!router.isFallback && !entry) {return <p>Error</p>}

  console.log(entry)

  return (
    <Layout preview={preview} index={index}>
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
  const query = { content_type: "page", limit: 1 }
  const data = await fetchEntries(preview, query)

  const index = (await fetchIndex(preview)) ?? []

  return {
    props: {
      preview,
      entry: data ?? null,
      index: index.items[0].fields
    },
  }
}

export async function getStaticPaths( preview = false ) {
  const paths = await fetchAllSlugs(preview, "page")
  console.log(paths)
  return {
    paths: paths.items.map(path => `/${path.fields.slug}`) ?? [],
    fallback: true,
  }
}
