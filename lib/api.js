const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const previewAccessToken = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

const previewClient = require('contentful').createClient({
  space: space,
  accessToken: previewAccessToken,
  host: 'preview.contentful.com',
})

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug, preview = true) {
  const entry = await getClient(preview).getEntries({ content_type: 'project', limit: 1, 'fields.slug[in]': slug })
  return entry.items[0].fields
}

export async function fetchAllSlugs() {
  const paths = await getClient().getEntries({ content_type: 'project', 'fields.slug[exists]': true })
  return paths.items
}

export async function fetchIndex(preview) {
  const index = await getClient(preview).getEntries({ content_type: 'archive', limit: 1, order: '-sys.updatedAt' })
  return index.items[0].fields.entries
}

export async function fetchEntry(slug, preview) {
  const entry = await getClient(preview).getEntries({ content_type: 'project', limit: 1, 'fields.slug': slug })
  return entry.items[0]
}
