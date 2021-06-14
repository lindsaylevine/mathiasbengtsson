import styles from './item.module.css'
import ReactMarkdown from 'react-markdown'
import { Img } from '../../../lib/image'

export default function Reference(props) {
  const { asset, caption, rightAligned, fullscreen, i = 0, anchor } = props

  if (!asset) {
    return <TextOnly data={caption} i={i} />
  }


  const isLandscape = asset.fields.file.details.image.width >= asset.fields.file.details.image.height

  return (
    <span className={styles.inlineRef}>
      {anchor && `(${i + 1})`}
    <figure className={`${isLandscape ? styles.landscape : styles.portrait} ${fullscreen && isLandscape ? styles.fullscreen : styles.inline}`}>
      <div className={styles.reference}>
        {i + 1}{!fullscreen && ":"}
      </div>
      <Img
        className={styles.asset}
        src={asset.fields.file.url}
        width={asset.fields.file.details.image.width}
        height={asset.fields.file.details.image.height}
        alt={asset.fields.description ?? "No description available"}
        />
      {caption &&
        <figcaption className={styles.caption}>
          <ReactMarkdown components={{p: 'span'}}>
            {caption}
          </ReactMarkdown>
        </figcaption>
      }
    </figure>
    </span>
  )
}

function TextOnly({ data, i }) {

  if (!data) return null

  return (
    <span className={styles.inlineRef}>({i + 1})
      <span className={styles.inline}>
        <span>{i + 1}:</span>
        <ReactMarkdown components={{p: 'span'}}>
          {data}
        </ReactMarkdown>
      </span>
    </span>
  )
}
