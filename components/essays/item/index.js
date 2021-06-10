import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './item.module.css'
import { objectToInlineList, formatDate } from '../../../lib/utils'
import Asset from './asset'

export default function Item({ data, index }) {
  const {
    authors,
    date,
    title,
    article,
    source,
    slug
  } = data

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { id } = node.data.target.sys.contentType.sys;
        if (id === "media") return <Asset {...node.data.target.fields} />
        return <div />
      }
    }
  };

  return (
    <article className={styles.container + " soft-breaks block"}>
      <header className={"col-2"}>
        <div>{objectToInlineList(authors)}:</div>
        <h1 style={{ margin: 0 }}>–{title}–</h1>
      </header>
      <section className={styles.body + " col-2"}>
        <div>
          {formatDate(date)}<br />
          {source}
        </div>
        <div>
          {documentToReactComponents(article, options)}
        </div>
      </section>
    </article>
  )
}
