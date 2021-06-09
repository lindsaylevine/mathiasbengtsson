import styles from './studio.module.css'

export default function Entry({ data }) {
  const { media, artwork } = data.fields

  return (
    <figure className={styles.asset}>
      <img src={media.fields.file.url} alt={media.fields.description ?? media.fields.title} />
    </figure>
  )
}
