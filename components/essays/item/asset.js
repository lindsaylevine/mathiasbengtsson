import styles from './item.module.css'

export default function Asset(props) {
  const { asset, caption, rightAligned, fullscreen } = props
  console.log(props)
  return (
    <figure className={styles.figure}>
      <img src={asset.fields.file.url} alt={asset.fields.description ?? caption ?? "This image has no description"} />
      {caption &&
        <figcaption>{caption}</figcaption>
      }
    </figure>
  )
}
