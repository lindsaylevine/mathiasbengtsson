import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Asset from './asset'
import styles from './assets.module.css'
import Header from '../../header/index'

export default function Item({ data, index }) {
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
    <article className={styles.container}>
    <section className={styles.introduction + " block soft-breaks"}>
        <Header index={index} />
        <h1>–{title}–</h1>
        {documentToReactComponents(textField)}
    </section>
      {assets.map((asset, i) => (
        <Asset data={asset} key={i} />
      ))}
    </article>
  )
}
