import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/layout'
import { APP_NAME, HOME_OG_IMAGE_URL, PAGE_DESCRIPTION } from '../../lib/const'
// import { fetchEntries, fetchIndex } from '../../lib/api'
import Item from '../../components/essays/item/index'
import Header from '../../components/header/index'

export default function Page({ page, preview, index }) {
  // const router = useRouter()
  // if (!router.isFallback && !page) return <p>Error</p>
  // if (!page.slug) return <p>Error</p>

  return (
    <Layout preview={preview} page={page.slug}>
      hi
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  return { props: { } }
  // const query = { content_type: 'article', 'fields.slug': params.entry, limit: 1 }
  // const page = await fetchEntries(preview, query)

  // const index = (await fetchIndex(preview)) ?? []

  // return {
  //   props: {
  //     preview,
  //     page: page.items[0].fields ?? null,
  //     index: index.items[0].fields
  //   },
  // }
}

export async function getStaticPaths( preview = false ) {
  return {
    paths: [],
    fallback: false
  }
  // const query = { content_type: 'page', 'fields.slug': "essays", limit: 1 }
  // const index = await fetchEntries(preview, query)
  // const paths = index.items[0].fields.components

  // return {
  //   paths: paths.map(path => `/essays/${path.fields.slug}`) ?? [],
  //   fallback: false,
  // }
}
