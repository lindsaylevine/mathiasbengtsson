import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Item({ data }) {
  const {
    heroImage,
    material,
    dimensions,
    name,
    title,
    textField,
    assets,
    releaseDate,
    type,
    slug
  } = data

  console.log(assets)

  return (
    <section className="block">
      <article className="soft-breaks">
        <h1>–{title}–</h1>
        {documentToReactComponents(textField)}
      </article>
    </section>
  )
}
