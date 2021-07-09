import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/layout'
import { APP_NAME, HOME_OG_IMAGE_URL, PAGE_DESCRIPTION } from '../../lib/const'
// import { fetchEntries, fetchAllSlugs, fetchIndex } from '../../lib/api'
import Item from '../../components/archive/item/index'

export default function Page({ page, preview, index }) {
  // const router = useRouter()
  // if (!router.isFallback && !page) {return <p>Error</p>}
  // if (!page.slug) return <p>Error</p>

  return (
    <Layout preview={preview} page={page.slug}>
      hi
    </Layout>
  )
}

export async function getStaticPaths( preview = false ) {
  // const index = await fetchAllSlugs(preview, "artwork")
  // const paths = index.items.map(path => `/archive/${path.fields.slug}`) ?? []

  return {
    paths: [],
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  // const query = { content_type: 'artwork', 'fields.slug': params.item, limit: 1, include: 5 }
  // const page = await fetchEntries(preview, query)

  // const index = (await fetchIndex(preview)) ?? []

  return { props: { } }
  // return {
  //   props: {
  //     preview,
  //     page: page.items[0].fields ?? null,
  //     index: index.items[0].fields
  //   },
  // }
}
