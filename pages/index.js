import Head from 'next/head'
import Layout from '../components/layout'
import { fetchIndex } from '../lib/api'

export default function Home({ preview, index }) {

  return (
    <Layout preview={preview} index={index}>
      <Head>
        <title>asso4077/nextjs-contentful-template</title>
      </Head>
      <h1>
        asso4077/nextjs-contentful-template
      </h1>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const index = (await fetchIndex(preview)) ?? []
  return {
    props: {
      preview,
      index: index.items[0].fields
    },
  }
}
