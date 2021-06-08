import Head from 'next/head'
import Layout from '../components/layout'
import { fetchIndex } from '../lib/api'

export default function Home({ preview, index }) {
  console.log(index)
  return (
    <Layout preview={preview}>
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
    props: { preview, index },
  }
}
