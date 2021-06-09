import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './item.module.css'
import { objectToInlineList, formatDate } from '../../../lib/utils'

export default function Item({ data, index }) {
  const {
    authors,
    date,
    title,
    article,
    source,
    slug
  } = data

  return (
    <article className={styles.container + " soft-breaks block"}>
      <header className={"col-2"}>
        <div>{objectToInlineList(authors)}:</div>
        <h1 style={{ margin: 0 }}>–{title}–</h1>
      </header>
      <section className={styles.introduction + " col-2"}>
        <div>
          {formatDate(date)}<br />
          {source}
        </div>
        <div>
          {documentToReactComponents(article)}
        </div>
      </section>
    </article>
  )
}
