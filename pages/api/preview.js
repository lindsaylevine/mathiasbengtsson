// import { getPreviewPostById } from '../../lib/api'

export default async function preview(req, res) {
  // const { secret, id, path } = req.query

  // if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !id) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  // // Fetch the headless CMS to check if the provided `slug` exists
  // const post = await getPreviewPostById(id)

  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' })
  // }

  // // Enable Preview Mode by setting the cookies
  // res.setPreviewData({})

  // // Redirect to the path from the fetched post
  // const url = path

  // res.write(
  //   `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
  //   <script>window.location.href = '${url}'</script>
  //   </head>`
  // )
  // res.end()
}
