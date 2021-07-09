import Head from 'next/head'
import Layout from '../components/layout'
// import { fetchIndex, fetchEntries } from '../lib/api'
import { APP_NAME, HOME_OG_IMAGE_URL, PAGE_DESCRIPTION } from '../lib/const'
import { getRandomInt } from '../lib/utils'
import Figure from '../components/index/figure'

export default function Home({ preview, index, page }) {
  return (
    <Layout preview={preview} index={index}>
      hi
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  return { props: {} }
  // const index = (await fetchIndex(preview)) ?? []
  // const query = { content_type: 'page', 'fields.slug': 'index', limit: 1, include: 3 }
  // const page = await fetchEntries(preview, query)

  // return {
  //   props: {
  //     preview,
  //     index: index.items[0].fields,
  //     page: page.items[0].fields
  //   },
  // }
}
