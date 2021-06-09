import styles from './studio.module.css'

export default function Entry({ data, display }) {
  const { media, artwork } = data.fields

  return (
    <figure className={styles.asset} style={{ display: display ? "block" : "none" }}>
      <img src={media.fields.file.url} alt={media.fields.description ?? media.fields.title} />
    </figure>
  )
}
