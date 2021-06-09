import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/layout'
import { APP_NAME, HOME_OG_IMAGE_URL, PAGE_DESCRIPTION } from '../../lib/const'
import { fetchEntries, fetchAllSlugs, fetchIndex } from '../../lib/api'
import Item from '../../components/archive/item/index'

export default function Page({ page, preview, index }) {
  const router = useRouter()
  if (!router.isFallback && !page) {return <p>Error</p>}
  console.log(page)
  return (
    <Layout preview={preview} page={page.slug}>
      <Head>
        <title>
          {APP_NAME}: {page.title}
        </title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta
          name="description"
          content={page.description ?? PAGE_DESCRIPTION}
        />
        <meta
          name="og:description"
          content={page.description ?? PAGE_DESCRIPTION}
        />
      </Head>
      <Item data={page} index={index} />
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const query = { content_type: 'artwork', 'fields.slug': params.item, limit: 1 }
  const page = await fetchEntries(preview, query)

  const index = (await fetchIndex(preview)) ?? []

  return {
    props: {
      preview,
      page: page.items[0].fields ?? null,
      index: index.items[0].fields
    },
  }
}

export async function getStaticPaths( preview = false ) {
  const paths = await fetchAllSlugs(preview, "artwork")

  return {
    paths: paths.items.map(path => `/archive/${path.fields.slug}`) ?? [],
    fallback: true,
  }
}
